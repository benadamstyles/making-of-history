const yaml   = require('read-yaml-promise')
const mkdirp = require('mkdirp')
const trash  = require('trash')
const dedent = require('dedent')
const fs     = require('fs')

mkdirp.sync('authors')

trash(['authors/*'])
.then(() => yaml('_config.yml'))
.then(data => {
  data.authors.forEach(author => {
    const text = dedent`
      ---
      layout: author
      title: Articles by ${author.name}
      author: ${author.value}
      ---`

    fs.writeFileSync(`authors/${author.value}.html`, text, 'utf8')
  })
})
.then(() =>
  console.log('\x1b[32m%s\x1b[0m', '✔︎ Author pages in place')
)
