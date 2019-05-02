const express = require('express')
const session = require('express-session')

const port = 3000

const app = express()

app.use(session({
    // secret, resave, saveUninitialized are necessary parameters
    secret: 'secretpassword',
    resave: false,
    saveUninitialized: true
}))

// Count the number of views by incrementing views when refreshed
app.get('/', function (req, res) {
    console.log(req.session);
    if (req.session.num === undefined) {
        req.session.num = 1;
    } else {
        req.session.num = req.session.num + 1;
    }
    res.send(`Views: ${req.session.num}`);
})

app.listen(3000, function () {
    console.log("Listening to port number " + port);
})
