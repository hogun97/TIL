// Write a JavaScript program to find 1st January is being a Sunday between
// 2014 and 2050.

function sundays() {
    let count = 0;
    for (let i = 2014; i < 2051; i++) {
        let date = new Date(i, 0, 1);
        if (date.getDay() === 0) {
            console.log('January 1st in ' + i + ' is on a Sunday')
            count++;
        }
    }
    return count;
}

console.log('Total of ' + sundays());