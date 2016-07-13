var http = require('http');
var fs = require('fs');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function (request, response) {
        // console.log(request.url.toString());
        var uri = url.parse(request.url, true);
        // console.log(uri.query.iso);
        var date = new Date(uri.query.iso);
        // console.log(date);
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        // console.log(hour+' '+minute+' '+second);
        // console.log(date.getTime());

        if(uri.pathname === '/api/parsetime' && request.method === 'GET') {
            response.writeHead(200, { 'Content-Type': 'application/json' })
            return response.end(JSON.stringify({"hour" : hour, "minute" : minute, "second" : second}));
        }

        else if(uri.pathname === '/api/unixtime' && request.method === 'GET'){
            response.writeHead(200, { 'Content-Type': 'application/json' })
            return response.end(JSON.stringify({"unixtime" : date.getTime()}));
        }

        else {
            res.writeHead(404)
            res.end()
        }
});

server.listen(port);
console.log("Server listening on port: "+port);