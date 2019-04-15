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

