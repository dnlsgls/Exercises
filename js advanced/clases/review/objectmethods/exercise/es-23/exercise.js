const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

//console.log(Object.keys(person))

// Print values of person using Object.keys

Object.keys(person).forEach(function(key){
  console.log(key + ": " + person[key]);
})

console.log(person)