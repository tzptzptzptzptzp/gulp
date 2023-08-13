const config = require('../config')
const del = require('del')

function clean() {
  return del([config.path.dist])
}

exports.clean = clean
