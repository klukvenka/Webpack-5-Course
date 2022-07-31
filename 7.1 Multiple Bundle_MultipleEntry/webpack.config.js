const path = require('path');

module.exports = {
  // entry is an object instead of string for mulpitple entry points
  entry: {
    index: './src/index.js', // our main page
    product: './src/products.js',
  },
  output: {
    filename: '[name].bundle.js', // it will create bundles for both index.bundle.js and product.bundle.js
    path: path.resolve(__dirname, 'dist'),
  },
};
