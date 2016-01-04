// var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
// var pathReact = path.resolve(node_modules, 'react/dist/react.min.js');
// var pathReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');

var config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'src/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'http://mycdn.com/', // This is used to generate URLs to e.g. images
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [node_modules],
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader!' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ],
    // noParse: [pathReact]
  },
  resolve: {
    // alias: {
    //     'react': pathReact,
    //     'react-dom': pathReactDOM
    // },
    extensions: ['', '.js', 'jsx', '.json']
  },
  // plugins: [new HtmlWebpackPlugin()]
};

module.exports = config;