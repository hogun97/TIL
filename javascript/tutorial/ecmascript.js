// let + const:

// let is like var except it restricts its scope to wherever it is located.

// const is not dynamic - it keeps the value that it was first assigned
// declare something a const if it's not going to change

const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
}

// will throw an error since player cannot be changed
player = "nick";

// const cannot be changed but an element in a const object can
const obj = {
    player: "bobby",
    experience: 100,
    wizardLevel: false
}

// Destructuring

const obj = {
    player: "bobby",
    experience: 100,
    wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;
// can be simplified into:
const { player, experience } = obj;
let { wizardLevel } = obj;

const name = "John Snow";

const obj = {
    [name]: "hello",
    [1 + 2]: "hihi"
}
// obj = { 3: "hihi", John Snow: "hello" }

const a = "Simon";
const b = true;
const c = {};

// If property = value, then the following works too
const obj = {
    a,
    b,
    c
}

// Template strings
const name = "Mike";
const age = 34;

const greetingBest = `Hello ${name} you seem to be ${age} years old.`

// Default arguments
function greet(name="Charles", age=30) {
    return `Hello ${name}, you seem to be ${age}`
}
// Can pass other arguments by greet("john", 50)

// Symbol

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');
//sym2 and sym3 are exactly the same but sym2 === sym3 returns false
//used to avoid any object property collision

// Arrow functions

function add(a, b) {
    return a + b;
}

const add = (a, b) => a + b;
// shorter version of declaring a function
// but all on one line if return statement is the only line in the function