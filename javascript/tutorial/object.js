var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    // 1) lists can be stored in an object as a property-value
    spells: ["abrakadabra", "shazam", "boo"],
    // function inside an object is called a method
    shout: function() {
        console.log("AHHHHHHHHH");
    }
};

// 2) objects can be stored in a list as elements
var list = [
    {
        username: "andy",
        password: "1234"
    },
    {
        username: "nick",
        password: "123"
    }
];

//Object-Array Exercise

var database = [
    {
        username: "andy123",
        password: "andypass"
    },
    {
        username: "jack12",
        password: "jackpass"
    },
    {
        username: "bill44",
        password: "billpass"
    },
    {
        username: "kim245",
        password: "kimpass"
    },
]

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log("Welcome, " + username);
    } else {
        console.log("Sorry, wrong username or password");
    }
};

function isUserValid(username, password) {
    for (var i=0; i<database.length; i++) {
        if(database[i].username === username &&
            database[i].password === password) {
                return true;
        }
    }
    return false;
};

var usernamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

signIn(usernamePrompt, passwordPrompt);