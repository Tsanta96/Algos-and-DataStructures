function checkForAsyncStorage() {
    console.log("In checkforAsyncStorage");
    let count = 0;
    let asyncStorage = null;
    while (count < 10) {
        if (asyncStorage !== null) break;
        console.log("Count => ", count);
        asyncStorage = 4
        count++;
        console.log(asyncStorage);
    };
}

console.log(checkForAsyncStorage());