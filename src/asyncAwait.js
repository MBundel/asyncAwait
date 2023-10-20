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
doMySync()
