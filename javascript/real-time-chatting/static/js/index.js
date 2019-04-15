let socket = io()

// Called when a socket connects
socket.on('connect', function() {
    let input = document.getElementById('test')
    input.value = 'Connected'
})

// Create send function since it's not a default socket.io function
function send() {
    // Get input data
    let message = document.getElementById('test').value

    // Reset input to an empty string after getting input data
    document.getElementById('test').value = ''

    // Deliver data and send event to server
    socket.emit('send', {msg: message})
}