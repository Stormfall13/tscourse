{

type Mapper<T, U> = (value: T) => U;


function transformArray<T, U>(array: T[], mapper: Mapper<T, U>): U[] {
    return array.map(mapper)
}

const numbers = [1,2,3,4,5];
const numberToString: Mapper<number, string> = (num) => num.toString();
const stringifiedNumbers = transformArray(numbers, numberToString);
console.log(stringifiedNumbers);


// ==========
interface IProduct {
    id: number;
    name: string;
    price: number;
}

const products: IProduct[] = [
    {
        id: 1,
        name: "Laptop",
        price: 10.000
    },
    {
        id: 2,
        name: "Mouse",
        price: 5.000
    },
    {
        id: 3,
        name: "Keyboard",
        price: 8.000
    },
]

const extractProductName: Mapper<IProduct, string> = (product) => product.name;
const productNames = transformArray(products, extractProductName);
console.log(productNames);

const extractProductId: Mapper<IProduct, number> = (product) => product.id;
const productId = transformArray(products, extractProductId);
console.log(productId);



}