/// HANDLER FILE
// const items = require('./data/items');
const itemsDev = require('./data/items-Dev');
const companies = require('./data/companies');

const handleItemId = (req, res) => {
  const { itemId } = req.params;
  const parsedId = parseInt(itemId);
  const item = itemsDev.find(item => item.id === parsedId);
  return res.json({ item });
}
// use the queries as values to filter the array with
// for example '/items?body_location=Arms&category=Fitness' will be all the items that are 'Arms' and 'Fitness'
const handleQueries = (req, res) => {
  let filtered = itemsDev;
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
  console.log(company);
  return res.json({ company });
}
// 
module.exports = {
  handleItemId,
  handleQueries,
  handleCompany
}