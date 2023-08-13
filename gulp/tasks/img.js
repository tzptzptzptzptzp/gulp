const config = require('../config')
const { src, lastRun, dest } = require('gulp')
const imagemin = require('gulp-imagemin')
const gulpIf = require('gulp-if')
const plumber = require('gulp-plumber')
const browserSync = require('browser-sync')
const argv = require('yargs').argv

const env = argv.production ? 'production' : 'development'

function img() {
  return src([config.path.src.img], {
    since: lastRun(img),
  })
    .pipe(
      plumber({
        errorHandler: function (err) {
          console.log(err)
          this.emit('end')
        },
      }),
    )
    .pipe(gulpIf(env === 'production', imagemin()))
    .pipe(dest(config.path.dist))
    .pipe(browserSync.stream())
}

exports.img = img
