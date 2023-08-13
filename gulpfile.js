const config = require('./gulp.config.js')
const { series, parallel, watch } = require('gulp')
const { template } = require('./gulp/template')
const { server } = require('./gulp/server')

function watches(done) {
  watch([config.path.src.pages], template)
  done()
}

exports.default = series(parallel(template), parallel(server, watches))
