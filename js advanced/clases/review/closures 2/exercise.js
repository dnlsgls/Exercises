function multiplyByTwo(parametro){
    const number= 2;
    function inner(){
        const result = number * parametro;
        return result;
    };
    return inner;
}

console.log(multiplyByTwo(4)());