/// HANDLER FILE
const items = require('./data/items');
// const userOrder = require('./data/user-Info')
// const itemsDev = require('./data/items-Dev');
const companies = require('./data/companies');
const fs = require('fs');
const ordersMade = require('./data/order-info');

const handleItemId = (req, res) => {
  const { itemId } = req.params;
  const parsedId = parseInt(itemId);
  const item = items.find(item => item.id === parsedId);
  return res.json({ item });
}

const filterByQueries = (queries, category) => {
  let filteredItems = items;
  let searchParameter = null;

  if(category)filteredItems=filteredItems.filter(item=> item.category === category)
  // console.log('queries',queries)
  if(queries){
      for (let searchQuery in queries) {
      searchParameter = queries[searchQuery];
      if(typeof searchParameter === 'string'){
        filteredItems = filteredItems.filter(item => item[searchQuery] === searchParameter);
      } else {
        searchParameter.forEach(parameter => filteredItems.concat(filteredItems.filter(item => item[searchQuery] === searchParameter)))
      }
    }
  }
  return filteredItems;
}
// use the queries as values to filter the array with
// for example '/items?body_location=Arms&category=Fitness' will be all the items that are 'Arms' and 'Fitness'
const handleQueries = (req, res) => {
  let filtered = filterByQueries(req.query);
  if (filtered.length) {
    res.status(200).send({status: 200, items: filtered})
  } else {
    res.status(404).send({status: 404, message: 'no items in category'})
  }
}

const handleCompany = (req, res) => {
  const { companyId } = req.params;
  const parsedId = parseInt(companyId);
  const company = companies.find(comp => comp.id === parsedId);
  // console.log(company);
  return res.json({ company });
}

const handleCheckout = (req, res) => {

  const {orders, orderInfo}= req.body;
  orders.forEach((order) => {
    const item = items.find(anItem =>anItem.id === order.itemId)
    item.numInStock -= order.numOrdered;
  });

  // let orderInfo = JSON.stringify(req.body.orderInfo, null, 2);
  // console.log(orderInfo)
  // fs.writeFileSync('./data/order-Info.json', orderInfo, (err) => {
  //   if (err) throw err;
  // });

  let uniqueId = new Date().valueOf().toString();
  // console.log('id',uniqueId)
  // console.log('orderInfo',orderInfo)
  ordersMade[uniqueId] = {orders, orderInfo}
  // console.log('ordersMade',ordersMade[uniqueId])
  res.status(200).send({status: 200, orderId: uniqueId});
}

const handleCategoryFilter = (req, res) => {
  const { category } = req.params;
  const itemsInCategory = filterByQueries(req.query, category)
  if (itemsInCategory.length) {
    res.status(200).send({status: 200, items: itemsInCategory})
  } else {
    res.status(404).send({status: 404, message: 'no items in category'})
  }
}

const filterBySearchQuery = (query) => {
  const filtered = items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
  return filtered;
}

const handleSearchQuery = (req, res) => {
  const { searchQuery } = req.params;
  const searchResults = filterBySearchQuery(searchQuery);
  res.status(200).send({status: 200, searchResults})
}

//
module.exports = {
  handleItemId,
  handleQueries,
  handleCompany,
  handleCheckout,
  handleCategoryFilter,
  handleSearchQuery,
}
// 