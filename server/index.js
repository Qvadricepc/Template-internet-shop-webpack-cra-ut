const fallback = require('express-history-api-fallback');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const express = require('express');

server.use(express.static('build'));
server.use('/api', router);
server.use(middlewares);

server.use(fallback('index.html', { root: 'build' }));

server.listen(process.env.PORT || 9001, () => {
  console.log('JSON Server is running');
});
