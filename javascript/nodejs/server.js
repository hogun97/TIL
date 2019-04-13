const http = require('http');

const server = http.createServer((request, response)=> {
    const user = {
        name: 'John',
        hobby: 'Skating'
    }

    // Using html
    response.setHeader('Content-type', 'text/html');
    response.end('<h1>Hello World</h1>')

    // Using json
    response.setHeader('Content-type', 'application/json');
    response.end(JSON.stringify(user));

    console.log('header: ' + request.headers);
    console.log('method: ' + request.method);
    console.log('url: ' + request.url);
})

server.listen(3000);