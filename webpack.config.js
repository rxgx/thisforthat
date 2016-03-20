const webpack = require('webpack');

const entry = {
  'js/app': './src/app.js'
};

const module = {
  loaders: {
    exclude: /node_modules/,
    loader: 'babel',
    test: /\.js$/
  }
};

const output = {
  filename: '[name].js',
  path: './public/js'
};

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new webpack.NoErrorsPlugin()
];

module.exports = {
  entry,
  module,
  output,
  plugins
};
