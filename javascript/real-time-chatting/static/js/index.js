let socket = io()

// Called when a socket connects
socket.on('connect', function() {
    let name = prompt('Welcome! What is your name?')

    if(!name) {
        name = "Anonymous"
    }

    socket.emit('newUser', name)
})

socket.on('update', function(data) {
    console.log(`${data.name}: ${data.message}`)
})

// Create send function since it's not a default socket.io function
function send() {
    // Get input data
    let message = document.getElementById('test').value

    // Reset input to an empty string after getting input data
    document.getElementById('test').value = ''

    // Deliver data and send event to server
    socket.emit('message', {type: 'message', message: message})
}