// Generic Functions
{
// function getFirstElement<T>(arr: T[]): T {
//     return arr[0];
// }

const getFirstElement = <T>(arr: T[]): T => {
    return arr[0];
}

const numbersArray: number[] = [1,2,3]
const firstElement = getFirstElement(numbersArray);
console.log(firstElement);

const stringsArray: string[] = ["Hello", "World"];
const firstElementString = getFirstElement(stringsArray);
console.log(firstElementString);

// ==========================
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

const numberBox = new Box<number>(10);
console.log(numberBox.getValue());

const stringBox = new Box<string>("TS");
console.log(stringBox.getValue());


}