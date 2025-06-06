"use strict";
{
    function getMessage(message) {
        return message;
    }
    function getMessage2(message) {
        return message;
    }
    function getMessage3(message) {
        if (typeof message === "string") {
            return `Строковое сообщение ${message}`;
        }
        return message;
    }
    console.log(getMessage("Привет"));
    console.log(getMessage2(69));
    function processString(str, repeat) {
        if (repeat === undefined) {
            return str;
        }
        return str.repeat(repeat);
    }
    console.log(processString("Hello"));
    console.log(processString("Hello", 3));
    // ====================
    class Calculator {
        add(a, b) {
            if (typeof a === "number" && typeof b === "number") {
                return a + b;
            }
            return `${a}${b}`;
        }
    }
    const calc = new Calculator();
    console.log(calc.add(5, 5));
    console.log(calc.add("Hello", "World"));
}
