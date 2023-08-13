const config = require('./gulp/config')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const argv = require('yargs').argv

const env = argv.production ? 'production' : 'development'

module.exports = {
  mode: env,
  entry: config.path.webpack.entry,
  output: {
    filename: config.path.webpack.output.filename,
    path: path.join(__dirname, config.path.webpack.output.dist),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: 'all',
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
}
