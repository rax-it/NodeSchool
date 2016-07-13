var http = require('http');
var bl = require('bl');

for(i=2; i<process.argv.length; i++) {
    http.get(process.argv[i], function (response) {
        // response.setEncoding("utf8");

        response.pipe(bl(function (err, data) {
            if (err)
                return console.error(err);
            console.log(data.toString('ascii'));
        }));
    });
}