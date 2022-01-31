const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  entry: ['./src/index.tsx'],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    // Join /public/index.html and javascript in memory during development and linking main.js to index.html for production
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './public/index.html'), // template file
      inject: true,
      filename: 'index.html', // output file
    }),
    // Clean up dist folder before the next build
    new CleanWebpackPlugin(),
    // Only update what has changed on hot reload
    new LodashModuleReplacementPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    compress: true,
    hot: true,
    static: './dist',
    port: 3000,
    proxy: {
      '/api': 'http://localhost:5000',
    },
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'json'],
  },
};
