const config = require('../config')
const { src, lastRun, dest } = require('gulp')
const plumber = require('gulp-plumber')
const browserSync = require('browser-sync')

function copy() {
  return src([config.path.src.copy, config.path.src.video], {
    since: lastRun(copy),
  })
    .pipe(
      plumber({
        errorHandler: function (err) {
          console.log(err)
          this.emit('end')
        },
      }),
    )
    .pipe(dest(config.path.dist))
    .pipe(browserSync.stream())
}

exports.copy = copy
