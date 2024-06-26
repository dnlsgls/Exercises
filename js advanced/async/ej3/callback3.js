function repeatHello (callback){
    const id = setInterval(callback, 1000);
    setTimeout(()=>{
        clearInterval(id)
    }, 6000)
}

repeatHello(() => console.log("Hello"));

/* porque el setInterval recibe una función o arrow functions */