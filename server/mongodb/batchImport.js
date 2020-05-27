const { MongoClient } = require('mongodb');
const assert = require('assert');
const fs = require('file-system')

const startClient = async () => {
  return new MongoClient('mongodb://localhost:27017', {
    useUnifiedTopology: true,
  })
}

const checkCollectionExists = async (dbName, collection) => {
  try {
    const client = await startClient();
    await client.connect();
    console.log('connected! - checkCollectionExists');  
    const db = await client.db(dbName);
    const finding = await db.collection(collection).find().toArray();
    client.close();
    console.log('disconnected! - checkCollectionExist');
    return finding.length
      ? true
      : false;
  } catch (err) {
    console.log('err',err)
  }
}

const createDb = async () => {
  try {
    console.log('creation');
    batchImport()
  } catch (err) {
    console.log('err',err)
  }
}

const batchImport = async () => {
  const items = JSON.parse(fs.readFileSync('../data/fixedItems.json'));
  const companies = JSON.parse(fs.readFileSync('../data/fixedCompanies.json'));
  try {
    const client = await startClient();
    await client.connect();
    console.log('connected! - batchImport');

    const db = await client.db('S_A_D_Wearables');
    await db.collection('items').insertMany(items);
    await db.collection('companies').insertMany(companies);

    client.close();
    console.log('disconnected! - batchImport');
  } catch (err) {
    console.log('err',err) 
  }
}

createDb()

