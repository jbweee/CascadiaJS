const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './client'),
  output: {
    path: path.resolve(__dirname, './static'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js[x]?/,
        exclude: /(node_modules|dep)/,
        query: {
          presets: ['react', 'es2015', 'env'],
          plugins: [
            ['styled-components'], 
            ['babel-plugin-styled-components']
          ],
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};