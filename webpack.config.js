const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    clean: true
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   loader: './loaders/simple-loader.js'
      // },
      {
        test: /\.js$/,
        // use: ['./loaders/sync-loader', './loaders/async-loader']
        // use: ['./loaders/raw-loader']
        // use: ['./loaders/pitch-loader', './loaders/pitch-loader2']
        loader: './loaders/clean-console-loader',
        options: {
          author: '田川_'
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    })
  ],
  mode: 'development'
}




