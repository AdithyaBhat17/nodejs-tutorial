const http = require('http');
const url = require('url');
const fs = require('fs');

let server = http.createServer(function (req, res) {
    console.log(url.parse(req.url, true).pathname, req.method)
    if(url.parse(req.url, true).pathname === '/hello' && req.method === 'GET') {
        res.writeHead(200, 'Success');
        fs.readFile('./index.html', function (error, result) {
            if(error) 
                console.log(error);
            res.write(result);
            res.end();
        });
        // res.end();
    }

});

server.listen(8080, 'Localhost', () => console.log('up and running'));
