const config = require('./gulp/config.js')
const { series, parallel, watch } = require('gulp')
const { template } = require('./gulp/tasks/template')
const { css } = require('./gulp/tasks/css')
const { server } = require('./gulp/tasks/server.js')

function watches(done) {
  watch([config.path.src.pages], template)

  watch([config.path.src.css], css)
  done()
}

exports.default = series(parallel(template, css), parallel(server, watches))
