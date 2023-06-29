const http = require('http');
const fs = require('fs');

http.createServer((req, res) =>{
//  we created our server and also access our file system to pipe our resources which is the html page.

    const readStream = fs.createReadStream('index.html');

    res.writeHead(200, {'Content-type' : 'text/html'});
    readStream.pipe(res);
    
}).listen(3000);