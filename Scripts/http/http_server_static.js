var fs = require('fs');
var http = require('http');
var url = require('url');
var path = require('path');
var ROOT_DIR = "Scripts/http";
http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true, false);
    var reqPath = ROOT_DIR + urlObj.pathname;
    console.log(path.resolve(reqPath));
    fs.readFile(ROOT_DIR + urlObj.pathname, function (err, data) {
        //console.log(req.pathname);
        //console.log(reqPath);

        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}).listen(1111);
console.log('http server is open');
