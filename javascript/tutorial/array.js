var list = ["tiger", "cat", "bear", "bird"];

console.log(list[1][2]);

var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.shift();
array.sort();
array.push("Kiwi");
array.shift();
array.reverse();

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1]);
