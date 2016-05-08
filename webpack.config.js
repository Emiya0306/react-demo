const webpack = require("webpack");
const path = require('path');

module.exports = {
  entry: "./client/src/app.jsx",
  output: {
    path: __dirname,
    filename: "./client/public/javascripts/bundle.js"
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin([options]),
    //new webpack.HotModuleReplacementPlugin(),
    //new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.jsx/, loader: "babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0"},
      {test: /\.json$/, loader: "json-loader"},
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader!autoprefixer?browsers=last 2 version"},
      // require sass进来变成base64变量,但是感觉没什么卵用,唯一的可能就是样式后面加上唯一base64标签使其独一无二
      //{test: /\.scss$/, loader: "style-loader!css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader!autoprefixer?browsers=last 2 version"},
      {test: /\.png$/, loader: "url-loader?prefix=img/&limit=5000"},
      {test: /\.jpg$/, loader: "url-loader?prefix=img/&limit=5000"},
      {test: /\.gif$/, loader: "url-loader?prefix=img/&limit=5000"},
      {test: /\.woff$/, loader: "url-loader?prefix=font/&limit=5000"},
      {test: /\.eot$/, loader: "file-loader?prefix=font/"},
      {test: /\.ttf$/, loader: "file-loader?prefix=font/"},
      {test: /\.svg$/, loader: "file-loader?prefix=font/"},
    ]
  }
};
