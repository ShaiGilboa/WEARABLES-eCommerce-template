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
  try {
    const item = await getItemById(parsedId);
    item
      ? res.status(200).json({status: 200, item})
      : res.status(404).json({status: 404})
  } catch (err) {
    console.log('err',err)
  }
}

const filterByQueries = async (queries, category) => {
  try {
    let filteredItems = upToDate() ? ITEMS_FROM_DB.items : await getAllItems();
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
  } catch (err) {
    console.log('err',err)
  }
}
// use the queries as values to filter the array with
// for example '/items?body_location=Arms&category=Fitness' will be all the items that are 'Arms' and 'Fitness'
const handleQueries = async (req, res) => {
  try {
    let filtered = await filterByQueries(req.query);
    console.log('filtered2',filtered.length)
    if (filtered.length) {
      res.status(200).send({status: 200, items: filtered})
    } else {
      res.status(404).send({status: 404, message: 'no items in category'})
    }
  } catch (err) {
    console.log('err',err)
  }
}

const handleCompany = async (req, res) => {
  const { companyId } = req.params;
  const parsedId = parseInt(companyId);
  try {
    const company = await getCompanyById(parsedId)

    company
      ? res.status(200).json({status: 200, company})
      : res.status(404).json({status: 404})
  } catch (err) {
    console.log('err',err)
  }
}

const handleCheckout = async (req, res) => {
  // items is an array of objects: {'itemId', 'numOrdered'}
  const {items, orderInfo}= req.body;
  let uniqueId = new Date().valueOf().toString();
  try {
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
  } catch (err) {
    console.log('err',err)
  }
}

const handleCategoryFilter = async (req, res) => {
  const { category } = req.params;
  try {
    const itemsInCategory = await filterByQueries(req.query, category)
    if (itemsInCategory.length) {
      res.status(200).send({status: 200, items: itemsInCategory})
    } else {
      res.status(404).send({status: 404, message: 'no items in category'})
    }
  } catch (err) {
    console.log('err',err)
  }
}

const filterBySearchQuery = async (query, queries) => {
  try {
    let filteredItems = upToDate() ? ITEMS_FROM_DB.items : await getAllItems();
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
  } catch (err) {
    console.log('err',err)
  }
}

const upToDate = () => {
  const now = new Date();
  return now.getTime() - ITEMS_FROM_DB.timestamp.getTime() > 300000
    ? false
    : true
}

const updateITEMS_FROM_DB = async () => {
  try {
    const items = await getAllItems()
    ITEMS_FROM_DB = {
      timestamp: new Date(),
      items,
    }
  } catch (err) {
    console.log('err',err)
  }
}

const handleSearchQuery = async (req, res) => {
  const { searchQuery } = req.params;
  try {
    const searchResults = await filterBySearchQuery(searchQuery, req.query);
    if (searchResults.length) {
      res.status(200).send({status: 200, searchResults})
    } else {
      res.status(404).send({status: 404, message: 'no items in category'})
    }
  } catch (err) {
    console.log('err',err)
  }
}
const startServer = async () => {
  const now = new Date();
  try {
    const items = await getAllItems();
    ITEMS_FROM_DB = {
      timestamp: now,
      items,
    }
  } catch (err) {
    console.log('err',err)
  }
}

startServer();
//
module.exports = {
  handleItemId,
  handleQueries,
  handleCompany,
  handleCheckout,
  handleCategoryFilter,
  handleSearchQuery,
}
