iAm = () => {
    console.log("I am");
}

firstName = async () => {
    return await new Promise(resolve => {
        setTimeout(() => {
            console.log("Elton");
            resolve();
        }, 1000);
    });
}

lastName = () => {
    console.log("John");
}


end = () => {
    console.log(", Mr Bean!");
}

doMySync = async () =>{
            iAm();
   await    firstName();
            lastName();
            end();
}
doItTwice = async ()=> {
    await doMySync()
    await doMySync()
}
doItTwice().catch((err)=>{console.log(err)})

// doMySync().then(() => {
//     // Handle any post-execution logic here
// }).catch(error => {
//     console.error("Error during execution:", error);
// });
//
// const anotherFunction = async () => {
//     try {
//         await doMySync();
//     } catch (error) {
//         console.error("Ein Fehler ist beim Aufruf von doMySync aufgetreten:", error);
//     }
// }
// anotherFunction()


