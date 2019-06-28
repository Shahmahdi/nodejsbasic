const { sum } = require('./calculator');
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('server is running...');
});

server.listen(3000);

const add = sum(10,20);
console.log(add);
// console.log(process)