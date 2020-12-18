var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);   
  var filename = "." + q.pathname;                  // get path name from url
  fs.readFile(filename, function(err, data) {       // read specified file
    if (err) {     // error reading file
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }              // file read successfully
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);                                 // write contents of file
    return res.end();
  });
}).listen(8080);