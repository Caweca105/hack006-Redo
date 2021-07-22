const mongodb = require('mongodb');


// salvar uma constante mongo_client
const { MongoClient } = mongodb

//salvar uma constante com caminho para o servidor mongodb
const URI = 'mongodb://localhost:27017'

//constante com a nossa BD 
const DB_REDO = "authentication"

//Declarar o client
let client

// função que faz algo que nós ainda não sabemos o que é !!! Tal como ligar o MongoDB
async function connect(uri) {
    try {
        if (client) return client

        client = new MongoClient(uri, {
            //evita que com os novos updates a função deixe de funcionar (useUnifiedTopology: true)
            useUnifiedTopology: true
        })
        await client.connect();
        return client;
    } catch (err) {
        console.log(err)
    }
}

// função que retorna o histórico de ligaçoes realizadas com o server ?????
// Vai receber uma bd e uma string que representa uma colacao 

async function getCollection(dbName, colName) {
    const client = await connect(URI)
    const db = client.db(dbName)
    return db.collection(colName)
}



const URI = "mongodb://localhost:27017"
let client;

async function connect (uri) {
    try {
        if(client) return client;
        client = new MongoClient (uri, {
            useUnifiedTopology: true
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