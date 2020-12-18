var http = require('http');
var dt = require('./myfirstmodule');                                   // include module

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});                 // response code = 200 (OK)
    res.write("The date and time are currently: " + dt.myDateTime());  // using external module: returns Date()
    res.end();                            
}).listen(8080);                                                       // port that server is listening for requests on