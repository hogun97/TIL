var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

// 1. For-loop
for (var i=0; i<todos.length; i++) {
    console.log(todos[i]);
};

// 2. While-loop
var counterOne = 0;
while (counterOne < 10) {
    console.log(counterOne);
    counterOne++;
};

// 3. Do
var counterTwo = 10;
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0);

// While vs Do
// While checks condition first and then executes.
// Do executes and then checks the conditions.

// 4. ForEach
// todos안에 있는 todo(element)들을 전부 console log 해라
// 여기서 i는 index
todos.forEach(function(todo, i) {
    console.log(todo, i);
})