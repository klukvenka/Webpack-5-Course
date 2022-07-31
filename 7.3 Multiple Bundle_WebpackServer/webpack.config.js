const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    product: './src/products.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist', // webpack will monitor this folder and if any changes will happen to the files it's going to be monitored
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      chunks: ['index'],
      inject: true,
      filename: 'index.html',
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/products.html'),
      chunks: ['product'],
      inject: true,
      filename: 'products.html',
    }),
  ],
};
