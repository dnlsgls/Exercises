const isLogged = true;

function loginStatus(){
    return new Promise()
}



const promiseOne = new Promise((resolve, reject) =>{
    if(isLogged) {
        const random = Math.floor(Math.random()*100)
        resolve(random)
    }else {
        reject(new Error("User is not logged"))
    }
})

const promiseTwo = new Promise((resolve, reject) => {
    
    if() {
        resolve({name: "John", age: 24})
    }
})