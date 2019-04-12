// Write a JavaScript program to find the area of a triangle where lengths
// of the three of its sides are 5, 6, 7.

function areaTri(s1, s2, s3) {
    let p = (s1 + s2 + s3)/2;
    return Math.sqrt(p*(p-s1)*(p-s2)*(p-s3));
}

console.log(areaTri(5,6,7));