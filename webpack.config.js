const path = require('path')
const webpack = require('webpack')
const standardOptions = require('./package.json').standard

const environment = process.env.NODE_ENV || 'development'
const $ = {}
const modulePattern = /(node_modules|bower_components)/

// TODO: This causes some issues when combined with app testing.
// $.devtool = environment === 'development' ? 'eval-source-map' : false

$.entry = {
  app: path.resolve(__dirname, './source', 'app.js'),
  style: path.resolve(__dirname, './source', 'app.css')
}

$.output = {
  filename: '[name].js',
  sourceMapFilename: '[name].map',
  path: path.resolve(__dirname, 'build')
}

$.plugins = []

if (environment === 'production') {
  $.plugins.push(new webpack.LoaderOptionsPlugin({minimize: false, debug: false}))
}

$.module = {
  rules: [
    // Use the latest CSS with PostCSS.
    {
      test: /\.css$/,
      loaders: 'file-loader?name=[name].[ext]!extract-loader!css-loader!postcss-loader'
    },
    // Use the latest JavaScript with Babel.
    { test: /\.js$/, exclude: modulePattern, loader: 'babel-loader' },
    // Catch errors as you develop.
    {
      test: /\.js?$/,
      enforce: 'pre',
      exclude: modulePattern,
      loader: 'standard-loader',
      options: {
        error: false,
        snazzy: true,
        parser: 'babel-eslint'
      }
    },
    // Format the final compiled output.
    {
      test: /\.js$/,
      enforce: 'post',
      exclude: modulePattern,
      loader: 'standard-format-loader',
      options: standardOptions
    }
  ]
}

module.exports = $
