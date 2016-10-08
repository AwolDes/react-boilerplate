var webpack = require('webpack');
// var Dashboard = require('webpack-dashboard');
// var DashboardPlugin = require('webpack-dashboard/plugin');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');

var appName = 'app';
var host = '0.0.0.0';
var port = '9000';
var env = process.env.NODE_ENV || 'dev';

var plugins = [];
var outputFile = appName + '.js';

// Conditionally add plugins for Production builds.
if (env === 'production' || env === 'staging') {
  // Always expose NODE_ENV to webpack, you can now use `process.env.NODE_ENV`
  // inside your code for any environment checks; UglifyJS will automatically
  // drop any unreachable code.
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  }));
  plugins.push(new UglifyJsPlugin({ minimize: true }));
}

// Conditionally add plugins for Development
else {

}

var config = {
  devtool: 'source-map',
  quiet: true,
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/base'),
    publicPath: '/',
    filename: outputFile
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: ['babel'],
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        include: /src/,
        loaders: [
          'style',
          'css',
          'autoprefixer?browsers=last 3 versions',
          'sass?outputStyle=expanded'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url?limit=8192',
          'img'
        ]
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx']
  },
  plugins: plugins
};

if (env === 'production') {
  config.module.loaders.push({
    test: require.resolve('trackjs'),
    loader: 'exports?trackJs'
  });
}

if (env === 'dev') {
  var compiler = webpack(config);

  new WebpackDevServer(compiler, {
    contentBase: './base/',
    hot: true,
    quiet: true,
    lazy: false,
    historyApiFallback: {
      index: '/'
    }
  }).listen(port, host, function (err, result) {
    if (err) {
      console.log(err);
    }
  });
}

module.exports = config;
