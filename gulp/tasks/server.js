const config = require('../config')
const browserSync = require('browser-sync')
const top = require('../../data/pages/top')

const path = top[0].directory !== null ? top[0].directory : ''

function server(done) {
  browserSync.init({
    server: `./${config.path.dist}`,
    reloadOnRestart: true,
    port: config.setting.server.port,
    startPath: path,
  })
  done()
}

exports.server = server
