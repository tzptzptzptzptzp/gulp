const config = require("./gulp.config.js");
const { series, parallel } = require("gulp");
const { server } = require("./gulp/server");

exports.default = series(parallel(server));
