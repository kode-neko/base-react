const path = require('path');

const common = {
  entry: {
    index: {
      import: './src/index.js'
    },
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js"],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  }
}

module.exports = {
  common
}