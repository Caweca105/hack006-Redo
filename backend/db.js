const { MongoClient } = require("mongodb")

const URI = "mongodb://localhost:27017"
let client;

async function connect (uri) {
    try {
        if(client) return client;
        client = new MongoClient (uri, {
            usedUnifiedTopology: true
        })
        await client.connect();

        return client;
    } catch (err) {
        console.log(`[ERRO]: ${err}`)
    }
}

async function getCollection(dbName, collectionName) {
    const client = await connect(URI);
    const db = client.db(dbName)
    const collection = db.collection(collectionName)
    return collection
}

async function sendJobsToDb(data, dbName, collectionName) {
    const collection = await getCollection(dbName, collectionName)
    const result = await collection.insertMany(data[collectionName])
    return result
}

async function sendBootcampsToDb(data, dbName, collectionName) {
    const collection = await getCollection(dbName, collectionName)
    const result = await collection.insertMany(data[collectionName])
    return result
}

module.exports = {
    getCollection,
    sendBootcampsToDb,
    sendJobsToDb
}