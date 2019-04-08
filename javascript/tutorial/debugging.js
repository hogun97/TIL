// Debugging: figuring out why the program is not acting the way it should

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (a, b) => a.concat(b), []);

// Debugging process:
// 1. Analyze the code
// 2. Search the main code (concat() in this case) and anaylze the parameters
// 3. Rearrange the function to help visualize
// 4. Add debugger to track through the function output
// 5. Identify the error (if there is one)

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
        debugger;
        return accumulator.concat(array)
    }, []);
    