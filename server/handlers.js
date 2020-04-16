/// HANDLER FILE
let items = require('./data/items');
// const itemsDev = require('./data/items-Dev');
const companies = require('./data/companies');

const handleItemId = (req, res) => {
  const { itemId } = req.params;
  const parsedId = parseInt(itemId);
  const item = items.find(item => item.id === parsedId);
  return res.json({ item });
}
// use the queries as values to filter the array with
// for example '/items?body_location=Arms&category=Fitness' will be all the items that are 'Arms' and 'Fitness'
const handleQueries = (req, res) => {
  let filtered = items;
  let value = null;
  // this function does not allow to check for an item that is 
  // BOTH: 'Wrist' and 'Arms'
  // TO DO: run over the req,query to check the filter values before 
  // filtering, then have a function that checks for item[key]===key||key2||key3
  for (let key in req.query) {
    value = req.query[key];
    filtered = filtered.filter(item => item[key] === value);
    // filtered = filtered.filter(item=>key==='id'? parseInt(item[key])===value : item[key]===value);
  }
  return res.json({ filtered });
}
const handleCompany = (req, res) => {
  const { companyId } = req.params;
  const parsedId = parseInt(companyId);
  const company = companies.find(comp => comp.id === parsedId);
  // console.log(company);
  return res.json({ company });
}

const handleCheckout = (req, res) => {
  // console.log('1',items[0].numInStock)
  // items[0].numInStock = 9
  // console.log('2',items[0].numInStock)
  // const orders = req.body.orders;
  // orders.forEach((order) => {
  //   if(order.itemId === items.numInStock){
  //     items.numInStock =- order.numOrdered;
  //   }
  // })
  // console.log(items[0].numInStock)

  // data received from post
  const orders = req.body.orders;
  console.log(orders)
  // create a var. to store the result of the map over the items data
  let modifiedItems = items.map(item => {
    //create a new version of the single item object
    let newItem = { ...item };
    //create a flag
    let isThisItemOrdered = false;
    //declare a variable to store the order matching the ids
    let savedOrder;
    //loop over the orders to match ids
    orders.forEach(order => {
    //  const orderedItem = items.find()
      if(order.itemId === item.id){
        isThisItemOrdered = true;
    //store the matching ids
        savedOrder = order;
      }
    })
    // use flag to either return the unchange items
    if(!isThisItemOrdered){
      return newItem;
    // or return the modified items
    } else {
      newItem.numInStock -= savedOrder.numOrdered;
      return newItem
    }
  })
  //update the items array
  items = modifiedItems;
  console.log(items[0])
  res.send("order complete with success");
}

//
module.exports = {
  handleItemId,
  handleQueries,
  handleCompany,
  handleCheckout
}
