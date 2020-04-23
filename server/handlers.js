/// HANDLER FILE
const items = require('./data/items');
const companies = require('./data/companies');
const fs = require('fs');
const ordersMade = require('./data/order-info');

let ITEMS_FROM_DB = null;

const {
  getItemById,
  insertOrder,
  getCompanyById,
  updateStockByOrder,
  getAllItems,
} = require('./mongodb/db.js');

const handleItemId = async (req, res) => {
  const { itemId } = req.params;
  const parsedId = parseInt(itemId);
  const item = await getItemById(parsedId);
  item
    ? res.status(200).json({status: 200, item})
    : res.status(404).json({status: 404})
}

const filterByQueries = async (queries, category) => {
  let filteredItems = await getAllItems();
  let searchParameter = null;

  if(category)filteredItems=filteredItems.filter(item=> item.category === category)
  
  if(queries){
      for (let searchQuery in queries) {
      searchParameter = queries[searchQuery];
      if(typeof searchParameter === 'string'){
        filteredItems = filteredItems.filter(item => item[searchQuery] === searchParameter);
      } else {
        let subSearch = [];
        searchParameter.forEach(parameter => {
          const aPartOfFiltering = filteredItems.filter(item => (item[searchQuery] === parameter))
          subSearch = subSearch.concat(aPartOfFiltering)
          })
        filteredItems = subSearch;
      }
    }
  }
  return filteredItems;
}
// use the queries as values to filter the array with
// for example '/items?body_location=Arms&category=Fitness' will be all the items that are 'Arms' and 'Fitness'
const handleQueries = async (req, res) => {
  let filtered = await filterByQueries(req.query);
  console.log('filtered',filtered.length)
  // if (filtered.length) {
    res.status(200).send({status: 200, items: filtered})
  // } else {
    // res.status(404).send({status: 404, message: 'no items in category'})
  // }
}

const handleCompany = async (req, res) => {
  const { companyId } = req.params;
  const parsedId = parseInt(companyId);
  const company = await getCompanyById(parsedId)

  company
    ? res.status(200).json({status: 200, company})
    : res.status(404).json({status: 404})
}

const handleCheckout = async (req, res) => {
  // items is an array of objects: {'itemId', 'numOrdered'}
  const {items, orderInfo}= req.body;
  let uniqueId = new Date().valueOf().toString();
  // console.log('items',items)
  const responseUpdateItems = await updateStockByOrder(items);
  if(!responseUpdateItems){
    res.status(404).json({status: 404});
    return
  }
  const responseInsertOrder = await insertOrder(items, orderInfo, uniqueId);
  if(!responseInsertOrder) {
    res.status(404).json({status:404});
    return
  }
  res.status(200).json({status: 200, orderId: uniqueId});
}

const handleCategoryFilter = async (req, res) => {
  const { category } = req.params;
  console.log('hi')
  const itemsInCategory = await filterByQueries(req.query, category)
  if (itemsInCategory.length) {
    res.status(200).send({status: 200, items: itemsInCategory})
  } else {
    res.status(404).send({status: 404, message: 'no items in category'})
  }
}

const filterBySearchQuery = async (query, queries) => {
  let filteredItems = await getAllItems()
  if(queries){
      for (let searchQuery in queries) {
      searchParameter = queries[searchQuery];
      if(typeof searchParameter === 'string'){
        filteredItems = filteredItems.filter(item => item[searchQuery] === searchParameter);
      } else {
        let subSearch = [];
        searchParameter.forEach(parameter => {
          const aPartOfFiltering = filteredItems.filter(item => (item[searchQuery] === parameter))
          subSearch = subSearch.concat(aPartOfFiltering)
          })
        filteredItems = subSearch;
      }
    }
    
  }
  return filteredItems;
}

const updateITEMS_FROM_DB = async () => {

}

const handleSearchQuery = async (req, res) => {
  const { searchQuery } = req.params;
  const searchResults = await filterBySearchQuery(searchQuery, req.query);
  if (searchResults.length) {
    res.status(200).send({status: 200, searchResults})
  } else {
    res.status(404).send({status: 404, message: 'no items in category'})
  }
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
