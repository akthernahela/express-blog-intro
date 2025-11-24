const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static('pubblic'));
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
    res.send(`<h1>Server del mio blog</h1>`)
})

const menu = [
    {
        id: 1,
        name: "Ciambellone",
        img: "/img/ciambellone.jpeg",
        content: "Dolce perfetto per la colazione",
        tags: ["dolce", "colazione"]
    },
    {
        id: 2,
        name: "Cracker barbabietola",
        img: "/img/cracker_barbabietola.jpeg",
        content: "Merenda salata",
        tags: ["salato", "barbabietola"]
    },
    {
        id: 3,
        name: "Pane fritto dolce",
        img: "/img/pane_fritto_dolce.jpeg",
        content: "Dolce fritto",
        tags: ["dolce", "fritto"]
    },
    {
        id: 4,
        name: "Pasta barbabietola",
        img: "/img/pasta_barbabietola.jpeg",
        content: "Pasta alla barbabietola",
        tags: ["primo", "barbabietola"]
    },
    {
        id: 5,
        name: "Torta paesana",
        img: "/img/torta_paesana.jpeg",
        content: "Torta tradizionale",
        tags: ["dolce", "tradizionale"]
    }
]

app.get('/bacheca', (req, res) => {


    res.json()
})