// Import pre-installed express and socket.io modules
const express = require('express')
const socket = require('socket.io')

// Import Node JS default modules
const http = require('http')
const fs = require('fs')

// Create express object
const app = express()

// Create express http server
const server = http.createServer(app)

// Bind server to socket.io
const io = socket(server)

// Define port number
const port = 8080

app.use('/css', express.static('./static/css'))
app.use('/js', express.static('./static/js'))

// Use GET method to run server through / directory
app.get('/', function(request, response) {
    fs.readFile('./static/index.html', function(err, data) {
        if(err) {
            response.send('Error')
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(data)
            response.end()
        }
    })
})

io.sockets.on('connection', function(socket) {
    socket.on('newUser', function(name) {
        console.log(name + ' has connected.')
        socket.name = name
        io.sockets.emit('update', {
            type: 'connect',
            name: 'SERVER',
            message: name + ' has connected.'
        })
    })

    socket.on('message', function(data) {
        data.name = socket.name
        console.log(data)
        socket.broadcast.emit('update', data);
    })

    socket.on('disconnect', function() {
        console.log(socket.name + ' has disconnected.')
        socket.broadcast.emit('update', {
            type: 'disconnect',
            name: 'SERVER',
            message: socket.name + ' has disconnected.'
        })
    })
})

// Maker server listen to port 8080
server.listen(port, function() {
    console.log('Listening to ' + port + '...')
})
