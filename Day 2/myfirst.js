var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});   // response code = 200 (OK)
    res.end('Hello World!');                             // server response
}).listen(8080);                                         // port that server is listening for requrests on