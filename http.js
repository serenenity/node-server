const http = require('http');
const server = http.createServer((request,response) =>{

    if(request.url == '/')
    {
        response.write('hello world, from node JS');
        response.end();
    }
    else
    {
        response.write('hello world, You are using another domain');
        response.end();
    }
});

server.listen(3000);