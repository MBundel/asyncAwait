
//  CallBack
function postStuff(){

    setTimeout(() => {
        post.forEach((post) =>{
            console.log(post);
        })
    }, 1000)
}

function  createPost(callback1){
    setTimeout(() => post.push('me'),1000);
    callback1();
}

let post = ['Hi', 'there', 'it', 'is'];


// postStuff();
createPost(postStuff);
