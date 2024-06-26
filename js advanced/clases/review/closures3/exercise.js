function printName(){
    const helloName="Hello John";
    function inner(){
       setTimeout(() => {console.log(helloName)},3000);
    }
    return inner()
}
printName();