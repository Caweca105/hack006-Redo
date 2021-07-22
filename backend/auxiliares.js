const { ObjectId } = require("mongodb");
const { getCollection } = require("./db");

const DB_NAME = "redo"
const JOBS_COLLECTION = "jobs"
const BOOTCAMP_COLLECTION = "bootcamp"

async function sendBootcampsToDb(data) {
    const collection = await getCollection(DB_NAME, BOOTCAMP_COLLECTION)
    const result = await collection.insertMany(data.bootcamp)
    return result
}

async function sendJobsToDb(data) {
    const collection = await getCollection(DB_NAME, JOBS_COLLECTION)
    const result = await collection.insertMany(data.jobs)
    return result
}


async function findJobs() {
    const jobs = await getCollection(DB_NAME, JOBS_COLLECTION)

    return jobs;
}

async function findBootcamp() {
    const bootcamp = await getCollection(DB_NAME, BOOTCAMP_COLLECTION)
    const bootcamps = await bootcamp.find().toArray()
    return bootcamps;
}

module.exports = {
    findJobs,
    findBootcamp,
    sendBootcampsToDb,
    sendJobsToDb
}