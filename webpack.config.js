const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'javascripts/site-bundle.js': './clients/react/app.js'
  },
  output: {
    path: __dirname + '/public/',
    filename: '[name]'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(s*)css$/,
        use: ExtractTextPlugin.extract({
           fallback: 'style-loader',
           use: [ 'css-loader', 'sass-loader' ] })
      },
      {
        test: /\.(woff2?|ttf|eot|svg|png|jpe?g|gif)$/,
        use: [{
             loader: 'url-loader',
             options: {
                 limit: 8000, // Convert images < 8kb to base64 strings
                 name: 'images/[hash]-[name].[ext]'
                 //publicPath: env === 'production' ? '../../' : '/'
             }
         }]
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("stylesheets/style.css")
  ]
};
