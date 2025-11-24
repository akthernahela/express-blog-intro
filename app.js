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
            name:
                img:
            content:
                tags: []
        },
        {
            name:
                img:
            content:
                tags: []
        },
        {
            name:
                img:
            content:
                tags: []
        },
        {
            name:
                img:
            content:
                tags: []
        }
    ]

})