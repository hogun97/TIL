// Async Await

// An async function is a function that returns a promise
// The benefit of an async function is that it makes code easier to read

// Promise
movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))

// Promise with async function syntax
async function playerStart() {
    const first = await movePlayer(100, 'Left');
    const second = await movePlayer(400, 'Left');
    await movePlayer(10, 'Right');
    await movePlayer(330, 'Left');
}
// Here, the const first and second will store the result of movePlayer.
// Await here means to pause until the Promise has been resolved.
// Syntactically the same as .then but there is no chaining process.

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)

async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    console.log(data);
}

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
)).then(array => {
    console.log(array[0])
    console.log(array[1])
    console.log(array[2])
}).catch(Error);

const fetchData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ))
        console.log('users: ', users)
        console.log('posts: ', posts)
        console.log('albums: ', albums)
    } catch (err) {
        console.log('Oops', err)
    }
}
// can also be simplified to remove all .thens

const fetchData = async function() {
    try {
        const [users, posts, albums ] = await Promise.all(urls.map(async function(url) {
            const resp = await fetch(url);
            const data = await resp.json();
            console.log(data);
        }))
    } catch (err) {
        console.log('Oops,', err);
    }
}
