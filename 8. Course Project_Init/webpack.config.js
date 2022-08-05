const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    courses: './src/pages/courses.js',
  },
  output: {
    filename: '[name].bundle.js', // filename is dynamic because we have 2 entries
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.s[ac]ss$/, // either sass or scss
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['index'],
      filename: 'index.html',
    }),
    new htmlWebpackPlugin({
      template: './src/pages/courses.html',
      chunks: ['courses'],
      filename: 'courses.html',
    }),
  ],
};
