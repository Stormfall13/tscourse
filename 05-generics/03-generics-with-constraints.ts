
function logValue<T extends { value: string }>(obj: T): void {
    console.log(obj.value);
}

logValue({value: "Hello"})


// ===========================
class DataHolder<T = string> {
    data: T;

    constructor(data: T) {
        this.data = data;
    }

    getData(): T {
        return this.data;
    }
}

const stringHolder = new DataHolder("Some string");
console.log(stringHolder.getData());

const numberHolder = new DataHolder(10);
console.log(numberHolder.getData());

const booleanHolder = new DataHolder(false);
console.log(booleanHolder.getData());