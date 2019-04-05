var list = ["tiger", "cat", "bear", "bird"];

console.log(list[1][2]);

var array1 = ["Banana", "Apples", "Oranges", "Blueberries"];

array.shift();
array.sort();
array.push("Kiwi");
array.shift();
array.reverse();

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1]);

// Advanced arrays

const array = [1, 2, 5, 7];
// This array will never change - new values will either be pushed or stored
// into a newly declared array

const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
})
console.log("ForEach: " + double)
// ForEach only iterates over elements in an array
// It does not return anything so I have to declare a new array and push the results into that array

// Map
const mapArray = array.map((num) => {
    return num * 2;
});
// can be simplified like below
const mapArray = array.map(num => num * 2);

console.log("Map: " + mapArray);
// Map iterates over elements AND returns a value
// Map is a pure function - if the input is same, output will always be returned

// Filter
const filterArray = array.filter(num => {
    return num > 5;
});
// can be simplified like below
const filterArray = array.filter(num => num > 5);

console.log("Filter: "+ filterArray);

// Reduce
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0);
// Accumulator: something where we can store the information that happens in
// the body of the function

console.log("Reduce: " + reduceArray);





