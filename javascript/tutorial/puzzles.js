// // Question 1: Clean the room function:

// [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
// // should return
// [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]

// const unsorted = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

// function clean(arr) {
//     let sorted = [];
//     let next = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] === next
//     });

//     return sorted;
// }

// Question 2: Target number for sum:

function answer(arr, target) {
    let ans = [];
    for ( let i = 0; i < arr.length-1; i++) {
        for ( let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                //ans = ans.push([arr[i], arr[j]]);
                ans = ans.push(1);
            }
        }
    }
    return ans;
}

answer([1,2,3], 4); // should return [1, 3]


// Question 3: