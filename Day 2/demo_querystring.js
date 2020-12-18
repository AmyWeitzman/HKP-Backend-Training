var http = require('http');
var url = require('url');     // module to split query string into readable parts

// create a server object
http.createServer(function (req, res) {                 // req: request from client, res: response from server
    res.writeHead(200, {'Content-Type': 'text/html'});  // response code = 200 (OK), response headers  
    var q = url.parse(req.url, true).query;             // parse query from request url
    var txt = q.year + " " + q.month;                   // get year and month params from query
    res.end(txt);                                      
}).listen(8080);                                        // server object listens on port 8080