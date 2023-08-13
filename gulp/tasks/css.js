const config = require('../config')
const { src, dest } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const plumber = require('gulp-plumber')
const sassVariables = require('gulp-sass-variables')
const clean = require('gulp-clean-css')
const gulpIf = require('gulp-if')
const browserSync = require('browser-sync')
const argv = require('yargs').argv

const env = argv.production ? 'production' : 'development'

function css() {
  return src([config.path.src.css], {})
    .pipe(
      plumber({
        errorHandler: function (err) {
          console.log(err)
          this.emit('end')
        },
      }),
    )
    .pipe(sassVariables({ $env: env }))
    .pipe(sass(config.setting.css.options))
    .pipe(
      autoprefixer({
        cascade: false,
      }),
    )
    .pipe(gulpIf(env === 'production', clean()))
    .pipe(dest(config.path.dist))
    .pipe(browserSync.stream())
}

exports.css = css
