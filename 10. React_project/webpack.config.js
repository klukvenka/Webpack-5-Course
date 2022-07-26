const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // helps to inject all the bundles into html file
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // optimization style-loader that gives a separate file
// const EslintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development', // running it in the development mode
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // new EslintPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  // adding a dev server
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 9000,
    open: true, // also can be specified as a flag to open the localhost automatically when starting the server
    historyApiFallback: true, // for routing in react app
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'), // where our loader should find these particular files
        exclude: path.resolve(__dirname, 'node_modules'), // not to scan js in node_modules
        use: [
          // the following setup is required for babel configuration
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: 'defaults',
                  },
                ],
                '@babel/preset-react',
              ],
            },
          },
          // {
          //   loader: 'eslint-loader',
          //   options: {
          //     fix: true,
          //   },
          // },
        ],
      },
      // we have to be able to load css and scss files
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // MiniCss used instead of style-loader so the css won't be added directly to html file built
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', {}]],
              },
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', {}]],
              },
            },
          },
          'sass-loader',
        ],
      },
      // images
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
