const http = require('http');
const app = require('./app');

// define PORT
const port = process.env.PORT || 8888;

//create a server
const server = http.createServer(app);

//listen a port
server.listen(port);