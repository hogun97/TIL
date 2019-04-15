# Notes

1. Require: imports modules <br>
Ex) Import http module and store it in a constant named http.
```js
const http = require('http')
```

2. Listen: runs server through given port and calls listener function <br>
Ex) Run server through 8080 port and call listener, which logs Hello World.
```js
listen(8080, function () {
    console.log('Hello World')
})
```

3. Get: assigns a server path to connect to and calls a function with `request` and `response`
    - `request`: stores data and information from client
    - `response`: information for responding to the client <br>
Ex) Connect to express server through / path and respond with 'Hello, Express Server!'
```js
const app = express()

app.get('/', function(req, res) {
    console.log('User connected to /')
    res.send('Hello, Express Server!')
})
```

4. Static files: use middleware to utilize static files (.js and .css) <br>
Ex) External clients can access css and js files under the provided directory path.
```js
app.use('/css', express.static('./static/css'))
app.use('/js', express.static('./static/js'))
```

5. `fs` modules: default module in Node JS that processes any file-related execution
    - `readFile()`: reads file and brings data in `response` object
    - `response`
        + `writeHead`: indicate the file type of the data <br>
        Ex) Indicate that we are trying to respond with an html file.
        ```js
        response.writeHead(200, {'Content-Type': 'text/html'})
        ```
        + `write`: send data <br>
        Ex) Send the html file.
        ```js
        response.write(data)
        ```
        + `end`: indicate completion <br>
        Ex) Indicate that the html file has been sent - reached completion.
        ```js
        response.end()
        ```

6. Socket Callback: functions within socket.io module
    - `on()`: any event received will be executed as a callback function <br>
    Ex) When a `socket` is connected to `sockets`, an event inside `on()` will be executed.
    ```js
    io.sockets.on('connection', function(socket)...)
    ```
    - `emit()`: socket module that sends an event to `on()` <br>
    Ex) When `send` event is called through `emit`, `send` will be sent over to `on`. <br>
    NOTE) The event name must be identical between `emit` and `on`.

    - Events in Socket.io
        + `connection`: called when a socket is connected
        + `disconnect`: automatically called when a socket disconnects
        + `send`: called when a `send` button has been clicked

7. HTML elements
    - `onclick`: property of a button that runs something when clicked <br>
    Ex) Make a Send button that calls `send` function when clicked.
    ```html
    <button onclick="send()">Send</button>
    ```

    - `type`, `id`: properties of input that defines type and id of input <br>
    Ex) Make an input that takes text as input and has an id of 'test'.
    ```html
    <input type="text" id="test">

8. document.getElementById(): gets an element in document by its ID <br>
    Ex) Get an element with 'test' as id and store it in variable input.
    ```js
    let input = document.getElementById('test')
    ```