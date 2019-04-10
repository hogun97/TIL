e1.addEventListener("click", submitForm);

// callback pyramid of doom
// using callback functions will create massive nested functions
movePlayer(100, 'Left', function() {
    movePlayer(400, 'Left', function() {
        movePlayer(10, 'Right', function() {
            movePlayer(330, 'Left', function() {
            });
        });
    });
});

// same code that uses promises
movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))

const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff worked');
    } else {
        reject('Error, it broke');
    }
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'one')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'two')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'three')
})
// promise4 will store 'three' 5 seconds after new Promise has been declared

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    })
    // this will print all values after 5 seconds
    // with Promise.all, all promises must be resolved
    // latest time is 5 seconds

promise
    .then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch(console.log(Error))
    // only runs when there is an error
    .then(result3 => {
        result3 + '!'
        console.log(result3)
    })

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'))
// fetch individual url from array urls
// then turn it into a respondable json file
// then with each result, console.log it
// catch error if there are any
