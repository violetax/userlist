const { resolve } = require('path'); // eslint-disable-line no-unused-vars
const webpack = require('webpack'); // eslint-disable-line

// build Webpack obj as input, do something, output
module.exports = {
  context: resolve(__dirname, 'src'),
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://127.0.0.1:9999',
    'webpack/hot/only-dev-server',
    './index.jsx',
  ],
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'public', 'javascripts'),
    publicPath: '/javascripts',
  },
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, ''),
    publicPath: '/javascripts',
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
        ],
};


// helper functions would live below this and be called within the config
