const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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
        test: /\.s[ac]ss$/, // either sass or scss
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/, // either sass or scss
        type: 'asset/resource',
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
    new CopyPlugin({
      // patterns - things that need to be copied
      // here we wanna copy assets/images/banner-image.png
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/images/*'),
          to: path.resolve(__dirname, 'dist'),
          context: 'src', // to start to copy folders without src
        },
      ],
    }),
  ],
};
