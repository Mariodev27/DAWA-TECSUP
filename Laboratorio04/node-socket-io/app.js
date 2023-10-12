const express = require('express')
const app = express()

const path = require('path')
app.use(express.static(path.join(__dirname, 'cliente')))

const http = require('http')
const server = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(server)

io.on('connection', (socket) => {
  
    //Procedimiento 1:
    //console.log('Un usuario se ha conectado.....!!!!')

    //Procedimiento 2:
    //socket.on('disconnect', () =>{
    //  console.log('Un usuario se ha desconectado......!!!!')
    //})

    //Procedimiento 3:
    // socket.on('chat', (msg) =>{
    //  console.log('Mensaje: ' + msg)
    //     io.emit('chat', msg)
    // })

    // Procedimiento 4
    socket.on('chat', (msg) =>{
        io.emit('chat', msg)
    })
})

app.get('/', (req, resp) => {
    resp.sendFile(`${__dirname}/cliente/index.html`)
})

app.get('/chat', (req, resp) => {
    resp.sendFile(`${__dirname}/cliente/chat_view.html`)
})

server.listen(3000,() =>{
    console.log('Servidor corriendo en http://localhost:3000')
})