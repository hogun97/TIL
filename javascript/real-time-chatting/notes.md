# Notes

1. Require: imports modules
Ex) Import http module and store it in a constant named http.
```js
const http = require('http')
```

2. Listen: runs server through given port and calls listener function
Ex) Run server through 8080 port and call listener, which logs Hello World.
```js
listen(8080, function () {
    console.log('Hello World')
})
```

3. Get: assigns a server path to connect to and calls a function with `request` and `response`
    - `request`: stores data and information from client
    - `response`: information for responding to the client
Ex) Connect to express server through / path and respond with 'Hello, Express Server!'
```js
const app = express()

app.get('/', function(req, res) {
    console.log('User connected to /')
    res.send('Hello, Express Server!')
})
```

4. Static files: use middleware to utilize static files (.js and .css)
Ex) External clients can access css and js files under the provided directory path.
```js
app.use('/css', express.static('./static/css'))
app.use('/js', express.static('./static/js'))
```

5. `fs` modules: default module in Node JS that processes any file-related execution
    - `readFile()`: reads file and brings data in `response` object
    - `response`
        + `writeHead`: indicate the file type of the data
        Ex) Indicate that we are trying to respond with an html file.
        ```js
        response.writeHead(200, {'Content-Type': 'text/html'})
        ```
        + `write`: send data
        Ex) Send the html file.
        ```js
        response.write(data)
        ```
        + `end`: indicate completion
        Ex) Indicate that the html file has been sent - reached completion.
        ```js
        response.end()
        ```
        