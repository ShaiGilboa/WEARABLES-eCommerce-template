'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const items = require('./data/items');
const PORT = 4000;
const { handleItemId, handleQueries, handleCompany } = require('./handlers');
// 
// const filterFunction = (array, property, value) => {
//     let ret = [];
//     ret = array.filter(item=>item.property===value);
//     return ret;
//   }
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
  // use the queries as values to filter the array with
  // for example '/items?body_location=Arms&category=Fitness' will be all the items that are 'Arms' and 'Fitness'
  .get('/items', handleQueries)
  .get('/items/:itemId', handleItemId)

  .get('/companies/:companyId', handleCompany)
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));