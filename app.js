const http = require('http');
const path = require('path');

const express = require('express');

const ejs = require('ejs');

const app = express();

// app.get('/', function(req, res, next) {
//   res.send(path.join(__dirname, 'views', 'index.ejs'));
// });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.get('/', function(req, res, next) {
//   res.render('index.ejs', { greeting: 'Hello from ejs!' });
// });

app.get('/', function(req, res, next) {
  res.render('index.ejs', { names: ['Rick', 'Morty', 'Summer', 'Beth', 'Jerry'] });
});

const port = 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on port ${port}`);
