var http = require('http');
var uc = require('upper-case');    // package to convert input to uppercase

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!"));   // write text as uppercase
  res.end();
}).listen(8080);