const isLogged = true;

// this function checks the loggin status 

const checkLogIn = (logged) => {
    return new Promise((resolve, reject) => {
        if(logged === true){
            //Si está logged genera un numero random
            const randomNumber = Math.random()
            resolve(randomNumber)
            //If not returns error
        }else{
            reject(new Error("User not logged"))
        }
    })
}

//Evaluate the given number if logged is true, and return the given number
const returnUserData = (logNum) => {
    return new Promise ((resolve, reject) => {
        //If logNum > 0.5 return User Data
        if(logNum > 0.5){
            resolve({name: "John", age: 24})
        //If not > 0.5 return a Error
        }else{
            reject(new Error("Number not valid"))
        }
    })
}


checkLogIn(isLogged) //invocamos la function checkLogIn usando de argumento isLogged
    .then((res) => returnUserData(res))
    .then((data) => console.log(data))
    .catch((err) => console.error(err))