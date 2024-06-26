class Person {
  constructor(firstName, lastName, age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
  }

  get firstNameGetter(){
    return this.firstName;
  }
  get lastNameGetter(){
    return this.lastName;
  }
  get ageGetter(){
    return this.age;
  }

  set firstNameSetter(name){
    this.firstName = name;
  }
  set lastNameSetter(apell){
    this.lastName = apell;
  }
  set ageSetter(value){
    this.age = value;
  }

  get fullName(){
/*     return this.firstName + " " + this.lastName; */
    return this.firstNameGetter + " " + this.lastNameGetter;
  }
}


const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);