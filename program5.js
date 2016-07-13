var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, list) {
   for (var i=0; i<list.length; i++) {
       var sp = list[i].split('.');
       // console.log(path.extname(list[i]));
       if('.'+process.argv[3] === path.extname(list[i]) && sp.length>1)
           console.log(list[i]);
   }
});