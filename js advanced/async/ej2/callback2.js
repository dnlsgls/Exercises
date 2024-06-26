function repeatHello (callback){
    setTimeout(callback, 1000)
}

repeatHello(() => console.log("Hello"));

/* porque el setInterval recibe una función o arrow functions */