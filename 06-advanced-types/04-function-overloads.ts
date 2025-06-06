{


function getMessage(message: string): string {
    return message;
}
function getMessage2(message: number): number{
    return message;
}
function getMessage3(message: string | number): string | number{
    if (typeof message === "string") {
        return `Строковое сообщение ${message}`
    }
    return message;
}

console.log(getMessage("Привет"));
console.log(getMessage2(69));


// ====================
function processString(str: string): string;
function processString(str: string, repeat: number): string;
function processString(str: string, repeat?: number): string{
    if (repeat === undefined) {
        return str;
    }
    return str.repeat(repeat);
}

console.log(processString("Hello"));
console.log(processString("Hello", 3));

// ====================
class Calculator {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any{
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        }
        return `${a}${b}`
    }
}

const calc = new Calculator();
console.log(calc.add(5, 5));
console.log(calc.add("Hello", "World"));



}