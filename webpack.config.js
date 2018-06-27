const { resolve } = require('path'); // eslint-disable-line no-unused-vars
const webpack = require('webpack'); // eslint-disable-line

// build Webpack obj as input, do something, output
module.exports = {
  context: resolve(__dirname, 'src'),
  entry: [
    'react-hot-loader/patch',
    'react-hot-loader/babel',
    'webpack-hot-middleware/client',
    './index.jsx',
  ],
  output: {
    filename: 'build.js',
    path: '/',
    publicPath: '/javascripts',
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
    ],
  },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),

        ],
};


// helper functions would live below this and be called within the config
