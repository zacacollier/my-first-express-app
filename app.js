const http = require('http');
const path = require('path');

const express = require('express');


const app = express();

app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})
const port = 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on port ${port}`);
