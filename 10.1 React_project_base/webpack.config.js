const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // helps to inject all the bundles into html file
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // optimization style-loader that gives a separate file

module.exports = {
  mode: 'development', // running it in the development mode
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  // adding a dev server
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      port: 9000,
      open: true, // also ccan be specified as a flag to open the localhost automatically when starting the server
    },
  },
  module: {
    // first of all we have to be able to load css and scss files
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // MiniCss used instead of style-loader so the css won't be added directly to html file built
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      // images
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
};
