var http = require('http');
var fs = require('fs');
var through = require('through2-map');
var port = process.argv[2];

var server = http.createServer(function (request, response) {
        if(request.method != 'POST')
            return response.end("Send me a POST!");

        request.pipe(through(function (chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(response);

        // request.pipe(response);
});

server.listen(port);
console.log("Server listening on port: "+port);