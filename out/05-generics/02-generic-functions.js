"use strict";
// Generic Functions
{
    // function getFirstElement<T>(arr: T[]): T {
    //     return arr[0];
    // }
    const getFirstElement = (arr) => {
        return arr[0];
    };
    const numbersArray = [1, 2, 3];
    const firstElement = getFirstElement(numbersArray);
    console.log(firstElement);
    const stringsArray = ["Hello", "World"];
    const firstElementString = getFirstElement(stringsArray);
    console.log(firstElementString);
    // ==========================
    class Box {
        value;
        constructor(value) {
            this.value = value;
        }
        getValue() {
            return this.value;
        }
    }
    const numberBox = new Box(10);
    console.log(numberBox.getValue());
    const stringBox = new Box("TS");
    console.log(stringBox.getValue());
}
