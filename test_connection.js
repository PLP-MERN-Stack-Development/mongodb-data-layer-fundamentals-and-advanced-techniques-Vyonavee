const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://vyonanjeri62_db_user:plpPass123@plp-bookstore.y0nihsb.mongodb.net/?retryWrites=true&w=majority&connectTimeoutMS=60000&socketTimeoutMS=60000';

async function test() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("✅ SUCCESS: Connected to Atlas!");
    const dbs = await client.db().admin().listDatabases();
    console.log("Databases:", dbs.databases.map(d => d.name));
  } catch (err) {
    console.error("❌ FAILED:", err.message);
  } finally {
    await client.close();
  }
}

test();