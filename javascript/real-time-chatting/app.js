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

// Maker server listen to port 8080
server.listen(8080, function() {
    console.log('Listening to port 8080...')
})