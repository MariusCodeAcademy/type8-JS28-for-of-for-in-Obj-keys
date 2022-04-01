export default class PersonEs6 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hello I am ${this.name} an I am ${this.age} years old`);
  }
}
