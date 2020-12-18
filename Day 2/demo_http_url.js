var http = require('http');

// create a server object
http.createServer(function (req, res) {                 // req: request from client, res: response from server
    res.writeHead(200, {'Content-Type': 'text/html'});  // response code = 200 (OK), response headers  
    res.write(req.url);                                 // write request url
    res.end();                                          // end response
}).listen(8080);                                        // server object listens on port 8080