const fm       = require('front-matter')
const globby   = require('globby')
const fsp      = require('fs-promise')
const trash    = require('trash')
const _        = require('lodash')
const Geocoder = require('batch-geocoder')
const yaml     = require('node-yaml')

globby(['_posts/*'])

.then(paths =>
  Promise.all(
    paths.map(path => fsp.readFile(path, 'utf8'))
  )
)

.then(files => files.map(file => fm(file)))

.then(frontMatterObjects =>
  _.flatten(
    frontMatterObjects.map(fmo =>
      fmo.attributes.location
      .split(',')
      .map(str =>
        str.trim().toLowerCase()
      )
    )
  )
)

.then(locations =>
  new Promise((resolve, reject) => {
    const geocoder = new Geocoder('scripts/geocodes.csv')
    geocoder.on('finish', resolve)
    geocoder.on('error', reject)
    geocoder.find(locations)
  })
)

.then(collection =>
  trash(['_data/geocodes.yml'])
  .then(() => yaml.writePromise('_data/geocodes.yml', collection))
)

.then(() =>
  console.log('\x1b[32m%s\x1b[0m', '✔︎ Geocodes cache in place')
)

.catch(err =>
  console.error('\x1b[31m%s\x1b[0m', err)
)
