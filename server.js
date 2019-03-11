var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.js');

var app = express();
var compiler = webpack(config);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.get('/sub', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public/sub.html'));
});

app.listen(process.env.PORT || 8080, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:8080');
});