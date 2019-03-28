// 1. Function declaration
function newFunction() {

}

// 2. Function expression
// Can either have name or be anonymous like below
var newFunction = function() {

};

// 3. Expression
// Something that produces a value
1+3;
var a = 2;
return true;

// 4. Calling or invoking a function
alert();
newFunction(param1, param2);

// 5. Assign a variable
var a = true;

// 6. Function vs method
function thisIsAFunction() {

}

// A function is a method if it's inside an object
var obj = {
    thisIsAMethod: function() {

    }
}

// You call a method after object and a dot
thisIsAFunction();
obj.thisIsAMethod();
