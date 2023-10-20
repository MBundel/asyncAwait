
// fetch.then.then.catch.finally
fetch('https://jsonplaceholder.typicode.com/todos/1   ').then(res => res.json()).then(json => console.log(json));



//async await with fetch
async function test (){
    try{

    const  res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    console.log(data);
    } catch (err){
        console.log(err);
    }
}

test();


//promise
const promise = new Promise((resolve, reject) => {
    resolve("nice");
    reject('not nice');
})

promise.then((data) => {
    console.log(data)
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
}).then((data) => {
    console.log(data.json())
})
    .catch((err) => {
    console.log(err)
});