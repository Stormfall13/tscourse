"use strict";
// Classes
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Привет, меня зовут ${this.name}`);
    }
    isAdult() {
        return this.age >= 18;
    }
}
const userInstance = new User("Иван", 30);
userInstance.greet();
console.log(userInstance.isAdult());
