var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');
// var pathReact = path.resolve(node_modules, 'react/dist/react.min.js');
// var pathReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');
// var pathReactRouter = path.resolve(node_modules, 'react-router/dist/react-router.min.js');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
var devServerHost = '0.0.0.0';
var devServerPort = 8080;

var config = {
  entry: [
    'webpack-dev-server/client?http://' + devServerHost + ':' + devServerPort,
    // 'webpack/hot/dev-server', // Auto reloads the entire page after the HMR update fails, use with --hot in webpack CLI
    'webpack/hot/only-dev-server', // Do not auto reload when syntax error occurs
    // Indicate that it's inline mode，equivalent to use --inline in webpack CLI
    path.resolve(__dirname, 'src/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', // This is used to generate URLs to e.g. images
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'dist',
    // publicPath: '/',
    historyApiFallback: true,
    hot: true,
    host: devServerHost,
    port: devServerPort
  },
  module: {
    // noPhase: [pathReact, pathReactDOM, pathReactRouter],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.resolve(__dirname, 'src')
      },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.(png|jpe?g)$/, loader: 'url?name=[name]_[hash:6].[ext]&limit=8192' },
      {
        test: /\.svg$/,
        loader: 'svg-sprite',
        query: {
          name: '[name]_[hash:6].[ext]',
          prefixize: true
        }
      }, // Or raw-loader?
      // { test: path.resolve(node_modules, pathReact), loader: 'expose?React' },
      // { test: path.resolve(node_modules, pathReactDOM), loader: 'expose?ReactDOM' }
    ]
  },
  resolve: {
    // alias: { 'react': pathReact, 'react-dom': pathReactDOM, 'react-router': pathReactRouter },
    extensions: ['', '.js', 'jsx', '.json']
  },
  plugins: [
    //new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
module.exports = config;