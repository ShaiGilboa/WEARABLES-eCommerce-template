'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const items = require('./data/items');
const itemsDev = require('./data/items-Dev');
const PORT = 4000;

express()
  .use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('./server/assets'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use('/', express.static(__dirname + '/'))

  // REST endpoints?
  // .get('/bacon', (req, res) => res.status(200).json('🥓'))

  .get('/items', (req, res) => {
    return res.json({ itemsDev });
  })
  .get('/items/:itemId', (req, res) => {
    const { itemId } = req.params;
    const parsedId = parseInt(itemId);
    const item = itemsDev.find(item => item.id === parsedId);
    return res.json({ item });
  })
  .get('/items/:itemCategory', (req, res) => {
    const { itemCategory } = req.params;
    const itemsByCat = itemsDev.filter(item => item.category === itemCategory);
    return res.json({ itemsByCat })
  })

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
