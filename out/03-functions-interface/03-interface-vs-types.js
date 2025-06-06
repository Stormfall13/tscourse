"use strict";
// Интерфейсы и типы
const user = {
    name: "Valakas",
    age: 33,
    email: "test@mail.ru",
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};
console.log(user.greet());
const user2 = {
    name: "Jane",
    age: 23,
    email: "test2@mail.ru",
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};
console.log(user2.greet());
const user3 = {
    name: "Max",
    age: 25,
    email: "test2@mail.ru",
    role: 'User',
    role2: 'User-pro',
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};
console.log(user3.greet());
