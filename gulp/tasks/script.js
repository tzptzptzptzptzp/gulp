const config = require('../config')
const { dest } = require('gulp')
const browserSync = require('browser-sync')
const { webpack } = require('webpack')
const webpackStream = require('webpack-stream')
const webpackConfig = require('../../webpack.config')

function transpile(done) {
  webpackStream(webpackConfig, webpack)
    .on('error', function () {
      this.emit('end')
    })
    .pipe(dest(config.path.webpack.output.dist))
    .pipe(browserSync.stream())
  done()
}

exports.script = transpile
