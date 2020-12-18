var http = require('http');
var fs = require('fs');      // module to work with file system on computer

// create a server object
http.createServer(function (req, res) {                     // req: request from client, res: response from server
    fs.readFile('demofile1.html', function(err, data) {     // read file, then run callback function, data = contents read from file 
        res.writeHead(200, {'Content-Type': 'text/html'});  // response code = 200 (OK), response headers  
        res.write(data);
        return res.end();                                    
    });
}).listen(8080);                                            // server object listens on port 8080