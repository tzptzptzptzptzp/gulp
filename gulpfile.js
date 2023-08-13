const config = require('./gulp/config.js')
const { series, parallel, watch } = require('gulp')
const { template } = require('./gulp/tasks/template')
const { css } = require('./gulp/tasks/css')
const { tailwind } = require('./gulp/tasks/tailwind')
const { server } = require('./gulp/tasks/server.js')
const { clean } = require('./gulp/tasks/clean.js')

function watches(done) {
  watch([config.path.src.pages], template)

  watch([config.path.src.css], css)
  watch([config.path.src.pages], tailwind)
  done()
}

exports.default = series(
  parallel(clean),
  parallel(template, css, tailwind),
  parallel(server, watches),
)
