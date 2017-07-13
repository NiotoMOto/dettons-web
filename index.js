const webpack = require('webpack');
const express = require('express');
const path = require('path');

const webpackConfig = require('./webpack.config');
const config = require('./conf/');

const app = express();
const compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});


app.listen(config.port, () => {
  console.log(`App listne on port ${config.port}`);
});