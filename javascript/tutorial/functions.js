const first = () => {
    const greet = "Hi";
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// Closures: a function has been run and executed - it's never going to be executed
// again. But it's going to remember that there are references.
// Child has access to parent scope but not the other way around

// Currying: the process of converting a function that takes multiple arguments
// into a function that takes them one at a time

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
//curriedMultiply(3)(4) will return 12

// Compose:
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;
const mul = (num) => num * 2;

compose(sum, mul);

// Avoiding side effects and function purity

// Side effects: something that the function's doing to affect the outside world
    // Something like console.log() or changing an external variable
    // b() produces a side effect - changing a, an external variable outside the function
var a = 1;
function b() {
    a = 2;
}

// Pure function:
    // no matter what, if my inputs are the same, it will always return the same output
    // pure functions do not produce any side effect
