// Типизация функций

function greet(name: string): string {
    return `Привет ${name}`
}
console.log(greet("Vasya"));


function logMessage(message: string): void{
    console.log(message);
}
logMessage("Hello")

function calculateSum(a: number, b: number): number {
    return a + b;
}
console.log(calculateSum(1, 2));


function createGreeting(name: string, greeging: string = "Привет!"): string {
    return `${greeging}, ${name}`
}

console.log(createGreeting("Алиса", "Здарова"));

function sumAll(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0)
}

console.log(sumAll(1, 2, 3, 4, 5));


const multiply = (a: number, b: number): number => a * b;

console.log(multiply(5,5));

