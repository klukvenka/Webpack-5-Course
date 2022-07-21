const path = require('path'); // NodeJs doesn't understand import keyword

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // == create file bundle.js in the directory called dist
  },
};
