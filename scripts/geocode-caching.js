const fm       = require('front-matter')
const globby   = require('globby')
const fsp      = require('fs-promise')
const prep     = require('prepend-file')
const _        = require('lodash')
const Geocoder = require('batch-geocoder')

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
    const geocoder = new Geocoder('_data/geocodes.csv')
    geocoder.on('finish', resolve)
    geocoder.on('error', reject)
    geocoder.find(locations)
  })
)

.then(() =>
  new Promise((resolve, reject) =>
    prep('_data/geocodes.csv', 'address;lat;lng\n', err => err ? reject(err) : resolve())
  )
)

.then(() =>
  console.log('\x1b[32m%s\x1b[0m', '✔︎ Geocodes cache in place')
)

.catch(err =>
  console.error('\x1b[31m%s\x1b[0m', err)
)
