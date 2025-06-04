// Union Types

let result: number | string;

result = 10;
result = 'Success';
// result = false;
// result = []

function printResult(value: number | string) {
    console.log(`Result: ${value}`);
}

printResult(15)
printResult('Success')
// printResult(false)