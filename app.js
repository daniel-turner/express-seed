var config = require(__dirname + '/config');
var express = require('express');
var app = express();


var server = app.listen(config.port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});