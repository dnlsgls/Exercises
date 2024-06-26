function printAsyncName(callback, name){
    setTimeout(() => {
        callback();
        setTimeout(() => {
        console.log(name)
        }, 1000)
    }, 1000)
}

function printHello(){
    console.log("Hello")
}

printAsyncName(printHello, "Dani")