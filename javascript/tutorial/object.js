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

// Reference type
var object1 = { value: 10 }; // store a new object in object1
var object2 = object1; // reference object1 and store whatever is in object1 in object2
var object3 = { value: 10 }; // store a new object in object3

object1 === object2 // returns true
object1 === object3 // returns false

// Context vs Scope
function b() {      // defines a scope - what is internal or external
    let a = 4;
}
console.log(this) // Window
    // 'this' refers to what object it's inside of

const object4 = {
    a: function() {
        console.log(this);      // Object (object4)
    }
}

// Instantiation: when you make a copy of an object and reuse the code
class Player {
    constructor(name, type) {
        console.log('Player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        console.log('Wizard', this);
    }
    play() {
        console.log(`I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Sheldon', 'Healer');
const wizard2 = new Wizard('Mike', 'Dark magic');

// Pass by Value
// Function is called by directly passing the value of the variable as the argument.
// Changing the argument inside the function doesn't affect the variable passed
// from outside the function.

function callByValue(varOne, varTwo) {
    console.log("Inside Call by Value");
    varOne = 100;
    varTwo = 200;
    console.log("varOne = " + varOne + ", varTwo = " + varTwo);
}

let varOne = 10;
let varTwo = 20;

console.log("Before Call by Value");
console.log("varOne = " + varOne + ", varTwo = " + varTwo);

callByValue(varOne, varTwo);

console.log("After Call by Value");
console.log("varOne = " + varOne + ", varTwo = " + varTwo);

// output will be :
// ---------------
// Before Call by Value
// varOne = 10, varTwo = 20
// Inside Call by Value Method
// varOne = 100, varTwo = 200
// After Call by Value
// varOne = 10, varTwo = 20

var a = 5;
var b = a;

b++;

console.log(a); // 5
console.log(b); // 6


// Pass by Reference
// Function is called by directly passing the reference/address of the variable
// as the argument.
// Changing the argument inside the function affects the variable passed
// from outside the function.
// In Javascript, objects and arrays follow Pass by Reference


function callByReference(varObj) {
    console.log("Inside Call by Reference");
    varObj.a = 100;
    console.log(varObj);
}

let varObj = {a:1};

console.log("Before Call by Reference");
console.log(varObj);

callByReference(varObj)

console.log("After Call by Reference");
console.log(varObj);

// output will be :
// ---------------
// Before Call by Reference
// {a: 1}
// Inside Call by Reference
// {a: 100}
// After Call by Reference
// {a: 100}

let obj1 = {name: 'Hogun', password: '123'};
let obj2 = obj1;

obj2.password = '456';

console.log(obj1); // {name: 'Hogun', password: '456'};
console.log(obj2); // {name: 'Hogun', password: '456'};
