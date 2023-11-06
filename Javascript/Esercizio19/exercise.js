class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get age() {
    return this._age;
  }
  get fullName() {
    return this._firstName + " " + this._lastName;
  }
  set firstName(newFirstName) {
    this._firstName = newFirstName;
  }
  set lastName(newLastName) {
    this._lastName = newLastName;
  }
  set age(newAge) {
    this._age = newAge;
  }
}
const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
