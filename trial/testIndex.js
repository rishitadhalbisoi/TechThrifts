var http = require('http');
var fs = require('fs')

const PORT = 8080

fs.readFile('./testIndex.html', function(error, html){
//fs.readFile('./imageView.html', function(error, html){
    if (error) throw error;
    http.createServer(function(request, response){
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(PORT)
});

