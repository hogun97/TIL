
// syntax: condition ? expr1 : expr2;

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access denied";

var automatedAnswer =
    "Your account number is " + ( isUserValid(false) ? "1234" : "not accessible" );

function condition() {
    if (isUserValid(true)) {
        return "You may enter";
    } else {
        return "Access denied";
    }
};

// Switch statement is another type of control flow
// The following code means:
// If variable direction is one of the following cases, set variable whatHappens
// to the specified string value. If not, return the default value.

// break means stop the function and proceed to the return statement.

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "right":
            whatHappens = "you arrive home";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        case "back":
            whatHappens = "you found a river";
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}