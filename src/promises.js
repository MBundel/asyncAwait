iAm = () => {
    console.log("I am");
}

firstName = () => {
    return new Promise(resolve => {
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

iAm();
firstName()
    .then(lastName)
    .then(end)
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        console.log("I finished");
    });
