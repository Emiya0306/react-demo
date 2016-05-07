const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

module.exports = function(server) {

  const router = server.loopback.Router();

  const clientPath = path.join(__dirname, '../../client');

  // Setup View engine
  server.set('view engine', 'ejs');
  server.set('views', path.join(clientPath, 'views'));

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended: true}));

  server.use(express.static(path.join(clientPath)));

  router.get('/', setupIndexPage);

  server.use(router);
};

function setupIndexPage(req, res, next) {
  res.render('index');
}
