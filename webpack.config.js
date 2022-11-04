const path = require('path');

module.exports = {
  output: {
    filename: 'index.js',
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
};