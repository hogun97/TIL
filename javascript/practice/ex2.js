// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let today = new Date();
let y = today.getFullYear();
let m = numSyntax(today.getMonth() + 1);
let d = numSyntax(today.getDate());

function numSyntax(num) {
    if (num < 10) {
        num = '0'.concat(num);
    }
    return num;
}

console.log(y + ' ' + m + ' ' + d + ' ');
