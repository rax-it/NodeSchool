var fs = require('fs');
var path = require('path');

module.exports = function(folder, ext, callback){
    var result = [];

    fs.readdir(folder, function (err, list) {
        if(err)
            return callback(err);
        
        for (var i=0; i<list.length; i++) {
            var sp = list[i].split('.');
            // console.log(path.extname(list[i]));
            if('.'+ext === path.extname(list[i]) && sp.length>1)
                result.push(list[i]);
        }

        return callback(null, result);
});
}