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
    
    return bootcamp;
}

module.exports = {
    findJobs,
    findBootcamp
}