"use strict";
// ? - опциональный параметр
function greetHello(name, message) {
    if (message) {
        return `Hello, ${name}, ${message}`;
    }
    return `Hello, ${name}`;
}
console.log(greetHello("Джек"));
console.log(greetHello("Джек", "How r u?"));
