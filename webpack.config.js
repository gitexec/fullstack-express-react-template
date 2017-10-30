const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack'),
    path = require('path'),
    fs = require('fs')

const packages = require('./package.json');

let config = {
  entry: {
    'javascripts/vendor-bundle.js': Object.keys(packages.dependencies),
    'javascripts/site-bundle.js': './clients/react/boot-client.js'
  },
  output: {
    path: path.resolve(__dirname + '/public/'),
    filename: '[name]'
  },
  // watch: true,
  // devServer: {
  //   contentBase: __dirname + '/public/',
  //   filename: "[name]",
  // },
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
    new webpack.optimize.CommonsChunkPlugin({
       name: ['javascripts/vendor-bundle.js'],
       minChunks: Infinity
    }),
    new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
    }),
    new ExtractTextPlugin("stylesheets/style.css",{
      allChunks: true
    }),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
    }),
  ]
};

if (process.env.NODE_ENV === 'production'){
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({})
  )
}
else {
    config.devtool = "#cheap-module-source-map";
    config.watch = true;
    config.devServer = {
        contentBase: path.resolve(__dirname + '/public/'),
        hot: true,
        inline: true,
        host: "0.0.0.0",
        port: 2708
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    )
}

module.exports = config
