const config = require('../gulp.config')
const { src, dest } = require('gulp')
const plumber = require('gulp-plumber')
const ejs = require('gulp-ejs')
const htmlbeautify = require('gulp-html-beautify')
const htmlhint = require('gulp-htmlhint')
const rename = require('gulp-rename')
const argv = require('yargs').argv
const browserSync = require('browser-sync')
const data = require('../data/index.js')

const env = argv.production ? 'production' : 'development'

function purgeCache(moduleName) {
  searchCache(moduleName, function (mod) {
    delete require.cache[mod.id]
  })
  Object.keys(module.constructor._pathCache).forEach(function (cacheKey) {
    if (cacheKey.indexOf(moduleName) > 0) {
      delete module.constructor._pathCache[cacheKey]
    }
  })
}

function searchCache(moduleName, callback) {
  var mod = require.resolve(moduleName)
  if (mod && (mod = require.cache[mod]) !== undefined) {
    ;(function traverse(mod) {
      mod.children.forEach(function (child) {
        traverse(child)
      })
      callback(mod)
    })(mod)
  }
}

function build(key) {
  purgeCache('../data/index.js')
  for (let i = 0; i < data[key].length; i++) {
    let fileName = data[key][i].fileName
    let directory = data[key][i].directory
    src(`${config.path.src.default}/pages/${data[key][i].template}.${config.setting.template.type}`)
      .pipe(
        plumber({
          errorHandler: function (err) {
            console.log(err)
            this.emit('end')
          },
        }),
      )
      .pipe(
        ejs(
          {
            env: env,
            data: data[key][i].data,
          },
          {},
          config.setting.template.options,
        ),
      )
      .pipe(htmlbeautify(config.setting.template.beautify))
      .pipe(htmlhint('.htmlhintrc'))
      .pipe(htmlhint.reporter())
      .pipe(rename((directory ? directory + '/' : '') + fileName + '.html'))
      .pipe(dest(config.path.dist))
      .pipe(browserSync.stream())
  }
}

function template(done) {
  for (const [key] of Object.entries(data)) {
    build(key)
  }
  done()
}

exports.template = template
