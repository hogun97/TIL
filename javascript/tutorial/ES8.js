// New features in ES8

// padStart() - for spacing purposes
'Turtle'.padStart(10); // returns '    Turtle'
// If the argument for padStart/End is smaller than string length, it just
// returns the string

// padEnd()
'Turtle'.padEnd(10); // returns 'Turtle    '

Object.values
Object.entries
Object.keys

let obj = {
    username0: 'Santa',
    username1: 'Rudolph',
    username2: 'Mr.Grinch'
}

// Print the key and the value of that key
Object.keys(obj).forEach((key) => {
    console.log(key, obj[key]);
})

// Print the values only
Object.values(obj).forEach(value => {
    console.log(value);
})

// Print the individual elements in a single array form
Object.entries(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).map(value => {
    console.log(value[1] + ' ' + value[0].replace('username', ''));
})

// Async + Await
