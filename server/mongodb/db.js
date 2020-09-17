const { MongoClient } = require('mongodb');
const assert = require('assert');
// const fs = require('file-system')

const startClient = async () => {
  return new MongoClient('mongodb://localhost:27017', {
    useUnifiedTopology: true,
  })
}

const getItemById = async (_id)=> {
  try {
    const client = await startClient()
    await client.connect()
    console.log('connected! - getItemById');
    const db = await client.db('S_A_D_Wearables');
    const finding = await db.collection('items').findOne({_id})
    client.close()
    console.log('disconnected! - getItemById');
    return finding;
  } catch (err) {
    console.log('err',err)
  }
}

const getCompanyById = async (_id)=> {
  try {
    const client = await startClient()
    await client.connect()
    console.log('connected! - getCompanyById');
    const db = await client.db('S_A_D_Wearables');
    const finding = await db.collection('companies').findOne({_id})
    client.close()
    console.log('disconnected! - getCompanyById');
    return finding;
  } catch (err) {
    console.log('err',err)
  }
}

const insertOrder = async (items, orderInfo, _id)=> {
  try {
    const client = await startClient()
    await client.connect()
    console.log('connected! - insertOrder');
    const db = await client.db('S_A_D_Wearables')
    const r = await db.collection('orders').insertOne({
      _id,
      items,
      orderInfo,
    });
    assert.strictEqual(1, r.insertedCount)
    client.close()
    console.log('disconnected! - insertOrder');
    return true
  } catch (err) {
    console.log('err',err)
    return false
  }
}

  // items is an array of objects: {'itemId', 'numOrdered'}
const updateStockByOrder = async (items)=> {
  try {
    const client = await startClient()
    await client.connect()
    console.log('connected! - updateStockByOrder');
    const db = await client.db('S_A_D_Wearables');
    for(let i = 0; i < items.length; i ++){
      console.log('items[i].itemId',items[i].itemId)
      let r = await db.collection('items').updateOne({_id:items[i].itemId}, {
        $inc: {
          numInStock: -items[i].numOrdered,
        }
      })
      assert.strictEqual(1, r.matchedCount)
      assert.strictEqual(1, r.modifiedCount)
    }
    // await db.collection('items').updateMany()
    client.close()
    console.log('disconnected! - updateStockByOrder');
    return true
  } catch (err) {
    console.log('err',err)
    return false
  }
}

const getAllItems = async ()=> {
  try {
    const client = await startClient()
    await client.connect()
    console.log('connected! - getAllItems');
    const db = await client.db('S_A_D_Wearables');
    const allItems = await db.collection('items').find().toArray();
    client.close()
    console.log('disconnected! - getAllItems');
    return allItems;
  } catch (err) {
    console.log('err',err)
    return false;
  }
}

module.exports = {
  getItemById,
  insertOrder,
  getCompanyById,
  updateStockByOrder,
  getAllItems,
}