const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  mode: "development",
  entry: './src/entry.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    fallback: {
      "assert": false,
      "path": false,
      "fs": false,
      "os": false,
      "stream": false,
      "buffer": false,
      "constants": false,
      "util": false,
      "process":false
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader', options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript'
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties',
              ]
            }
          }
        ]
      }]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    // new ReactRefreshWebpackPlugin(),
  ]
}

module.exports = config;
