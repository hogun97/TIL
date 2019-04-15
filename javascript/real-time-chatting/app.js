// Import pre-installed express and socket.io modules
const express = require('express')
const socket = require('socket.io')

// Import Node JS default modules
const http = require('http')

// Create express object
const app = express()

// Create express http server
const server = http.createServer(app)

// Bind server to socket.io
const io = socket(server)

// Use GET method to run server through / directory
app.get('/', function(request, response) {
    console.log('User connected to /')
    response.send('Hello, Express Server')
})

// Maker server listen to port 8080
server.listen(8080, function() {
    console.log('Listening to port 8080...')
})