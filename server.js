//create a const called http and import the module 'http'
const http = require('http');

//create a const called host name and set its value to 'localhost'
const hostname = 'localhost';
//create a const called host name and set its value to 'localhost'
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Hello World!</h1></body></html>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});