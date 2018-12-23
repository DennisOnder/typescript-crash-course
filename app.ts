// Basics
const myString: string = 'Hello, World!';
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

const newUser = new Person('Dennis', 18);
console.log(newUser);
newUser.classDidCreate();

// Functions
function test(message: string): void {
  console.log(message);
}

const mySum = (num1: number, num2: number) => {
  return num1 + num2;
}

const getName = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`
}
