const http = require('http');

const sever = http.createServer((req, res) => {
    console.log('run request ...')
    res.setHeader('Content-type', 'text/html'); 
    res.write('<h3>Hello world<h3>');
    res.write('<h3>From Vinh Phuc - Manh DC<h3>');
    res.end();
})

sever.listen(3000, 'localhost', () => {
    console.log('Node.JS sever is running on port: 3000');
}
)