{
// Generircs Дженерики

interface IBox<T> {
    value: T;
}

const numberBox: IBox<number> = {
    value: 123
}

const stringBox: IBox<string> = {
    value: "123"
}

// ================
type Pair<T, U> = {
    first: T,
    second: U
}

const pair: Pair<string, number> = {
    first: "age",
    second: 30
}

}