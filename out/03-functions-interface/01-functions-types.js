"use strict";
// Типизация функций
function greet(name) {
    return `Привет ${name}`;
}
console.log(greet("Vasya"));
function logMessage(message) {
    console.log(message);
}
logMessage("Hello");
function calculateSum(a, b) {
    return a + b;
}
console.log(calculateSum(1, 2));
function createGreeting(name, greeging = "Привет!") {
    return `${greeging}, ${name}`;
}
console.log(createGreeting("Алиса", "Здарова"));
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));
const multiply = (a, b) => a * b;
console.log(multiply(5, 5));
