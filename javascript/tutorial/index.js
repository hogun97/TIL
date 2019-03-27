function sayHello() {
    console.log("Hello");
}

sayHello();

var sayBye = function() {
    console.log("Bye");
}

sayBye();

function multiply(a, b) {
    return a * b;
}

function checkDriverAge(age) {
    if (Number(age) < 18) {
        console.log("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        console.log("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    }
}