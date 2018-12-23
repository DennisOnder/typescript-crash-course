// Basics
let myString: string;
myString = 'Hello, World!';
console.log(myString);

// Classes
class Person {
  name: string;
  age: number;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  classDidCreate() {
    console.log(`${this.name} has been registered!`);
  }
}

var newUser = new Person('Dennis', 18);

console.log(newUser);
newUser.classDidCreate();

// Functions
function test(message: string): void {
  console.log(message);
}