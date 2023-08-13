const config = require('../config')
const { src, dest } = require('gulp')
const postcss = require('gulp-postcss')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const plumber = require('gulp-plumber')
const clean = require('gulp-clean-css')
const gulpIf = require('gulp-if')
const browserSync = require('browser-sync')
const argv = require('yargs').argv

const env = argv.production ? 'production' : 'development'

function tailwind() {
  return src([config.path.src.tailwind], {})
    .pipe(
      plumber({
        errorHandler: function (err) {
          console.log(err)
          this.emit('end')
        },
      }),
    )
    .pipe(postcss([tailwindcss('./tailwind.config.js'), autoprefixer]))
    .pipe(gulpIf(env === 'production', clean()))
    .pipe(dest(`${config.path.dist}/assets/css`))
    .pipe(browserSync.stream())
}

exports.tailwind = tailwind
