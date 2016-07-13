var net = require('net');
var port = process.argv[2];
var date = new Date();
var strftime = require('strftime');

var server = net.createServer(function (socket) {
    year = date.getFullYear();
    month = +date.getMonth()+1;
    day = date.getDate();
    hours = date.getHours();
    minutes = date.getMinutes();

    // socket.write(year+"-"+month);
    // socket.write(strftime('%B %d, %Y %H:%M:%S'));
    socket.write(strftime('%Y-%m-%d %H:%M'));
    socket.end('\n');
});

server.listen(port);
console.log("Server listening on port: "+port);