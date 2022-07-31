const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin'); // importing the plugin

module.exports = {
  entry: {
    index: './src/index.js',
    product: './src/products.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // to use plugins:
  // When configuration inside htmlWebpackPlugin({}) is empty it's going to generate an html file
  // We can add some configurations in order to tell the plugin to use our html files (that have other code in them that we need) instead of generating a new one
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'), // template that is going to be used
      chunks: ['index'], // dependencies of the particulate template, in our case index.html file depends on the index entry (index.js)
      inject: true, // inject the deoendency in the template
      filename: 'index.html', // have to be specified when we have 2 of these plugins
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/products.html'),
      chunks: ['product'],
      inject: true,
      filename: 'products.html',
    }),
  ],
};
