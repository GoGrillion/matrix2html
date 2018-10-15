const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('webpack-copy-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let srcDir = '/demo/';
let dstDir = '/demo-dist/';

/**
 * WebPack is only used to compile the demo application. This file may serve as an example
 * build configuration which can include this software.
 *
 * Note the raw loader used to include .vert and .frag GLSL shaders as strings
 */

const extractCss = new MiniCssExtractPlugin({
  filename: '[name].css',
  disable: false
});

module.exports = {
  mode: "development",
  context: path.join( __dirname, srcDir),
  entry: ['./app.js', './demo.css'],
  output: {
    path: path.join(__dirname, dstDir),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.js.map'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'resolve-url-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          root: path.join( __dirname, srcDir)
        }
      },
      {
        test: /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          compact: false,
          presets: ['@babel/preset-env']
        }
      },
      { test: /\.ts$/, loader: 'ts-loader' },

      // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
      // loads bootstrap's css.
      { test: /\.(vert|frag)$/, loader: 'raw-loader' },
      { test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: 'file-loader' },
      { test: /\.jpg(\?v=\d+\.\d+\.\d+)?$/,    loader: 'file-loader' },
      { test: /\.png(\?v=\d+\.\d+\.\d+)?$/,    loader: 'file-loader' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'head'
    }),
    extractCss,
    new CopyWebpackPlugin({ dirs: [{from: 'demo/images', to: "demo-dist/images"}]})
  ]
};