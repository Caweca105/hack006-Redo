const { sendBootcampsToDb } = require("./db");
const { sendJobsToDb } = require("./db")
const fs = require("fs")

const MEMORY_BOOTCAMPS = "./DB/bootcamp.json"
const MEMORY_JOBS = "./DB/jobs.json"

function readFile(memory) {
    const memo = JSON.parse(fs.readFileSync(memory).toString())
    return memo
}

async function insertBootcamp(memory) {
    const jsonFile = await readFile(memory)
    const bootcamps = await sendBootcampsToDb(jsonFile, "redo", "bootcamps")
}

async function insertJobs(memory) {
    const jsonFile = await readFile(memory)
    const jobs = await sendJobsToDb(jsonFile, "redo", "jobs")
}

insertBootcamp(MEMORY_BOOTCAMPS).then(() => console.log("inserted bootcamps"))
insertJobs(MEMORY_JOBS).then(() => console.log("inserted jobs"))