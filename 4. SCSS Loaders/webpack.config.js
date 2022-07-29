const path = require('path'); // NodeJs doesn't understand import keyword

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // == create file bundle.js in the directory called dist
  },
  module: {
    rules: [
      {
        test: /\.(css)$/, // defines the files types that need to match --> any with EXACT css at the end
        use: [
          // all the loaders that are used for loading for that css,
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true } },
        ],
      },
      {
        test: /.s[ac]ss$/, // either sass or scss
        use: [
          { loader: 'style-loader' }, // 3. puts all that css into index.html file
          { loader: 'css-loader', options: { modules: true } }, // 2. dealing with that css
          { loader: 'sass-loader' }, // 1. converting scss imports into plain css
        ],
      },
    ],
  },
};
