/* eslint-disable no-var */

var path = require('path')
var webpack = require('webpack')
var DedupePlugin = require('webpack/lib/optimize/DedupePlugin')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'js'),
    filename: 'index.js'
  },
  plugins: [
    new webpack.BannerPlugin("---\n---\n\n", {raw: true}),
    new DedupePlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|liquid\/)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-3'],
          plugins: ['lodash']
        }
      }, {
        test: /imagesloaded|wolfy87-eventemitter/,
        loader: 'imports?define=>false&this=>window'
      }
    ],
    noParse: /liquid\//
  }
}
