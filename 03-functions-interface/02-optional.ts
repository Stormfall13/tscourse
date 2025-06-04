// ? - опциональный параметр

function greetHello(name: string, message?: string): string{
    if(message){
        return `Hello, ${name}, ${message}`
    }
    return `Hello, ${name}`
}

console.log(greetHello("Джек"));
console.log(greetHello("Джек", "How r u?"));
