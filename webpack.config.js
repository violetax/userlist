const { resolve } = require('path'); // eslint-disable-line no-unused-vars
const webpack = require('webpack'); // eslint-disable-line
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: [
    'react-hot-loader/patch',
    'react-hot-loader/babel',
    'webpack-hot-middleware/client',
    './index.jsx',
  ],
  output: {
    filename: 'javascripts/build.js',
    path: '/',
    publicPath: '/',
  },
  devServer: {
     proxy: {
             '*': 'http://localhost:' + (process.env.PORT || 3000)
           },
    host: '127.0.0.1'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [ 'css-loader', 'sass-loader' ],
          fallback: 'style-loader',
        }),
      },
    ],
  },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new ExtractTextPlugin('stylesheets/style.css'),
        ],
};

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin());
}


// helper functions would live below this and be called within the config
