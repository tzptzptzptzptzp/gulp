const config = require("./gulp.config.js");
const { series, parallel } = require("gulp");
const { template } = require("./gulp/template");
const { server } = require("./gulp/server");

exports.default = series(parallel(template), parallel(server));
