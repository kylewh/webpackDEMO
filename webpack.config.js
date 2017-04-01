const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './app/index.js',
  devtool: 'eval',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new UglifyJSPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'js'),
        loader: 'babel-loader'
      }
    ]
  }
}