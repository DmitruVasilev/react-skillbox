/*eslint-disable @typescript-eslint/no-var-requires*/
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = !IS_DEV;
const GLOBAL_CSS_REGEXP = '/.global.css/;';

function setupDevTool() {
  if (IS_DEV) return 'eval';
  if (IS_PROD) return false;
}

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.[tj]s?(x)$/,
        use: ['ts-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]-[local]--[hash:base64:5]'
              },
              sourceMap: IS_DEV
            },
          },
          {
            loader: 'postcss-loader',
          }],
        exclude: GLOBAL_CSS_REGEXP,
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEV
            },
          },
          {
            loader: 'postcss-loader',
            options: {sourceMap: true},
          },
        ]
      },
    ]
  },
  devtool: setupDevTool(),
  plugins: [
    new HTMLWebpackPlugin({ template: path.resolve(__dirname, 'index.html')}),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: {
        map: {
          inline: false,
          annotation: true
        }
      }
    }),
  ],
  devServer: {
    port: 3000,
    hot: IS_DEV,
  }
};
