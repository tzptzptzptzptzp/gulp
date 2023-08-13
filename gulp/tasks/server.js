const config = require('../config')
const browserSync = require('browser-sync')

function server(done) {
  browserSync.init({
    server: `./${config.path.dist}`,
    reloadOnRestart: true,
    port: config.setting.server.port,
  })
  done()
}

exports.server = server
