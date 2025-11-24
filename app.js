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

app.get('/menu', (req, res) => {

    const menu = [
        {
            name: "Ciambellone",
            img: "/img/ciambellone.jpeg",
            content:
                tags: []
        },
        {
            name: "Cracker barbabietola",
            img: "/img/cracker_barbabietola.jpeg",
            content:
                tags: []
        },
        {
            name: "Pane fritto dolce",
            img: "/img/pane_fritto_dolce.jpeg",
            content:
                tags: []
        },
        {
            name: "Pasta barbabietola",
            img: "/img/pasta_barbabietola.jpeg",
            content:
                tags: []
        },
        {
            name: "Torta paesana",
            img: "/img/torta_paesana.jpeg",
            content:
                tags: []
        }
    ]

})