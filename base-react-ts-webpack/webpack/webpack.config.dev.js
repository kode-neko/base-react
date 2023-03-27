const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
  fonts,
  js,
  pics,
  style,
  ts,
} = require('./loaders');
const { common } = require('./common');

module.exports = {
  mode: 'development',
  ...common,
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    hot: true,
    port: 4000,
  },
  module: {
    rules: [
      fonts,
      js,
      pics,
      style,
      ts,
    ]
  },
}