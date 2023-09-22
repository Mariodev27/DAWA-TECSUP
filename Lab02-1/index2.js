const express = require('express')

const app = express()

app.get('/', (req, res) => {

    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

app.get('/contact', (req, res) => {
    
    res.sendFile('./static/contact.html', {
        root: __dirname
    })
})

app.get('/about', (req, res) => {
    
    res.sendFile('./static/about.html', {
        root: __dirname
    })
})

app.use((req, res) => {

    res.status(404).send('No se encontro tu pagina....!!!!!')
})

app.listen(3000)
console.log('Sever on port ${3000}');