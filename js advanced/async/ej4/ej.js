const number = 15;

const promise = new Promise((resolve, reject) =>{
    if(number > 10) {
        resolve(number)}
    else {
        reject(number)}
})

promise
    .then((response) =>{
        console.log(response)
    })
    .catch((response) => {
        console.error("la promesafue rechazada" + response)
    })