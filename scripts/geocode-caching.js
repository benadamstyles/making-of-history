const fm       = require('front-matter')
const globby   = require('globby')
const trash    = require('trash')
// const dedent   = require('dedent')
const fsp      = require('fs-promise')
const _        = require('lodash')
const Geocoder = require('batch-geocoder')

trash(['_data/geocodes.csv'])

.then(() => globby(['_posts/*']))

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
    const geocoder = new Geocoder('_data/geocodes.csv')
    geocoder.on('finish', resolve)
    geocoder.on('error', reject)
    geocoder.find(locations)
  })
)

.then(res => console.log(res))

.then(() =>
  console.log('\x1b[32m%s\x1b[0m', '✔︎ Geocodes cache in place')
)

.catch(console.error.bind(console))
