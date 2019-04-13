// Common JS way of importing
const script2 = require('./script2.js');
// Import the entire file and store it in a constant script2

// ES6 way of importing
// import largeNumber from './script2.js'

const a = script2.largeNumber;
// access largeNumber in script2 with . reference
const b = 5;

setTimeout(() => {
    console.log(a + b)  // prints path to current directory
}, 3000);