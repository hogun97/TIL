// Write a JavaScript program to determine whether a given year is a
// leap year in the Gregorian calendar.

function isLeap(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(isLeap(2020));
console.log(isLeap(2000));
console.log(isLeap(2016));
console.log(isLeap(1111));
