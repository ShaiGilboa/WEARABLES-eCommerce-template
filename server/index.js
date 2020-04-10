'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const items = require('./data/items');
const itemsDev = require('./data/items-Dev');
const PORT = 4000;

const filterFunction = (array, property, value) => {
    let ret = [];
    ret = array.filter(item=>item.property===value);
    return ret;
  }

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
  .get('/bacon', (req, res) => res.status(200).json('🥓'))
  // use the queries as values to filter the array with
  // for example '/items?body_location=Arms&category=Fitness' will be all the items that are 'Arms' and 'Fitness'
  .get('/items', (req, res) => {
    let filtered = itemsDev;
    let value = null;
    // this function does not allow to check for an item that is 
    // BOTH: 'Wrist' and 'Arms'
    // TO DO: run over the req,query to check the filter values before 
    // filtering, then have a function that checks for item[key]===key||key2||key3
    for (let key in req.query) {
      value = req.query[key];
        filtered = filtered.filter(item=>item[key]===value);
    }
    return res.json({ filtered });
  })
  .get('/items/:itemId', (req, res) => {
    const { itemId } = req.params;
    const parsedId = parseInt(itemId);
    console.log('id');
    
    const item = itemsDev.find(item => item.id === parsedId);
    return res.json({ item });
  })

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
