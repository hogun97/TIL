// Write a JavaScript program to display the current day and time in
// the following format.

// Sample Output : Today is : Tuesday.
// Current time is : 10 : 30 : 38

let today = new Date();
let day = today.getDay();

let weekday = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

console.log('Today is : ' + weekday[day-1]);

function numSyntax(num) {
    if (num < 10) {
        num = '0'.concat(num);
    }
    return num;
}

let h = numSyntax(today.getHours());
let m = numSyntax(today.getMinutes());
let s = numSyntax(today.getSeconds());

console.log('Current time is : ' + h + ':' + m + ':' + s);