// scope

function bb() {
    var a = "Hello"
};

var b = "World";

// ReferenceError because a was defined inside function bb
// window cannot access variable a declared inside a function
console.log(a);

// No error will be thrown since variable b was declared in window scope
console.log(b);

var fun = 5;

function funFunction() {
    // child scope
    var fun = "hello";
    console.log(1, fun);
}

function funerFunction() {
    // child scope
    var fun = "byee";
    console.log(2, fun);
}

function funestFunction() {
    fun = "AHHHH";
    console.log(3, fun);
}

console.log("window", fun);
funFunction();
funerFunction();
funestFunction();
console.log(fun);
// this will print "AHHHH"
// var 'fun' in a function will overwrite the variable declared in window scope
// 'fun' will not overwrite and just access the variable in the window scope
