var mymodule = require('./module');

mymodule(process.argv[2], process.argv[3], function (err, data) {
    if (err)
        return console.log(err);

   data.forEach(function (fileName) {
        console.log(fileName);
    });

});