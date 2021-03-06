const express = require('express');
const { findBootcamp, findJobs} = require('./auxiliares');

const PORT = 3601
const app = express()

app.use(express.json())
app.get("/", (req, res) => res.status(200).send('Comunicando...'))

app.get("/api/bootcamp", async (req, res) => {
    res.status(200).json({
        bootcamp: await findBootcamp()
    })
})

app.get("/api/jobs", async (req, res) => {
    res.status(200).json({
        jobs: await findJobs()
    })
})

app.listen(PORT, () => console.log(`À escuta em ${PORT}`))