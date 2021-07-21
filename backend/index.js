import express from 'express';

const PORT = 3601
const app = express()

app.use(express.json())
app.get("/", (req, res) => res.status(200).send('Comunicando...'))


app.listen(PORT, () => console.log(`À escuta em ${PORT}`))