// Basics
var myString = 'Hello, World!';
console.log(myString);
// Classes
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.classDidCreate = function () {
        console.log(this.name + " has been registered!");
    };
    return Person;
}());
var newUser = new Person('Dennis', 18);
console.log(newUser);
newUser.classDidCreate();
// Functions
function test(message) {
    console.log(message);
}
var mySum = function (num1, num2) {
    return num1 + num2;
};
var getName = function (firstName, lastName) {
    return firstName + " " + lastName;
};
