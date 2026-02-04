const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;
export const collections = {
    ITEMS: "items"
}
const dbName = process.env.ITEMES_DB
const client = new MongoClient(uri, {
    serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


export const dbConnect = async (collectionName) => {
  return client.db(dbName).collection(collectionName)
}