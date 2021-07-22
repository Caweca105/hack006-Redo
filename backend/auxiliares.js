const { ObjectId } = require("mongodb");
const { getCollection } = require("./db");

const JOBS_COLLECTION = "jobs"
const BOOTCAMP_COLLECTION = "bootcamp"


async function findJobs(jobs) {
    const jobs = await getCollection(JOBS_COLLECTION, "jobs")

    return jobs;
}

async function findBootcamp() {
    const bootcamp = await getCollection(BOOTCAMP_COLLECTION)
    const bootcamps = await bootcamp.find().toArray()
    return bootcamps;
}

module.exports = {
    findJobs,
    findBootcamp
}