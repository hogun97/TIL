// Type Coercion
// Coerces two elements to be of same type before comparing their values

// === compares values without coercion
// == compares values after type coercion

1 === '1' // false
1 == '1' // true, due to type coercion

if (1) {
    console.log(5);
}   // will console.log 5, since JS coerces 1 to true

if (0) {
    console.log(5);
}   // will not console.log anything since JS coerces 0 to false

// Reference
// ------------
// Type Coercion Table:
// https://dorey.github.io/JavaScript-Equality-Table/
//
// MDN - Equality Comparisons
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
//
// ECMA Comparison Algorithm
// https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3
