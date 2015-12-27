/* eslint-disable no-var */

var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'js'),
    filename: 'index.js'
  },
  plugins: [
    new webpack.BannerPlugin("---\n---\n\n", {raw: true})
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-3']
        }
      }
    ]
  }
}
