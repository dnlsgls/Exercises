function printHello(){
    console.log("Hello")
}

function printAsyncName(callback, name){
    const int1 = setInterval(() => {
        callback();
        const int2 = setInterval(() =>{
            console.log(name)
            clearInterval(int2)
        }, 1000)
        clearInterval(int1);
    }, 1000)
}


printAsyncName(printHello, "Dani")