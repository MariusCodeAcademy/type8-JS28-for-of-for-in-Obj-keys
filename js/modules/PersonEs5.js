// sukurti toki pati Person su es5 sintakse
export default function PersonEs5(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(`Hello I am ${this.name} an I am ${this.age} years old`);
  };
}
