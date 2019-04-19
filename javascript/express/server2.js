const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('<h1>Hello</h1>');
    next()
    // this next() is a middleware necessary to pass down
})

app.get('/', (req, res) => {
    res.send('getting root');
});

app.listen(3001);
