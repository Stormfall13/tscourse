"use strict";
{
    function transformArray(array, mapper) {
        return array.map(mapper);
    }
    const numbers = [1, 2, 3, 4, 5];
    const numberToString = (num) => num.toString();
    const stringifiedNumbers = transformArray(numbers, numberToString);
    console.log(stringifiedNumbers);
    const products = [
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
    ];
    const extractProductName = (product) => product.name;
    const productNames = transformArray(products, extractProductName);
    console.log(productNames);
    const extractProductId = (product) => product.id;
    const productId = transformArray(products, extractProductId);
    console.log(productId);
}
