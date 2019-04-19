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
    let chat = document.getElementById('chat')

    let message = document.createElement('div')
    let node = document.createTextNode(`${data.name}: ${data.message}`)
    let className = ''

    switch(data.type) {
        case 'message':
            className = 'other'
            break

        case 'connect':
            className = 'connect'
            break

        case 'disconnect':
            className = 'disconnect'
            break
    }

    message.classList.add(className)
    message.appendChild(node)
    chat.appendChild(message)
})

// Create send function since it's not a default socket.io function
function send() {
    // Get input data
    let message = document.getElementById('test').value

    // Reset input to an empty string after getting input data
    document.getElementById('test').value = ''

    let chat = document.getElementById('chat')
    let msg = document.createElement('div')
    let node = document.createTextNode(message)
    msg.classList.add('me')
    msg.appendChild(node)
    chat.appendChild(msg)

    // Deliver data and send event to server
    socket.emit('message', {type: 'message', message: message})
}

function sendOnEnter(event) {
    let key = event.which || event.keyCode;
    if (key == 13) {
        send();
    }
}