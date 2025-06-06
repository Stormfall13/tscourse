"use strict";
function logValue(obj) {
    console.log(obj.value);
}
logValue({ value: "Hello" });
// ===========================
class DataHolder {
    data;
    constructor(data) {
        this.data = data;
    }
    getData() {
        return this.data;
    }
}
const stringHolder = new DataHolder("Some string");
console.log(stringHolder.getData());
const numberHolder = new DataHolder(10);
console.log(numberHolder.getData());
const booleanHolder = new DataHolder(false);
console.log(booleanHolder.getData());
