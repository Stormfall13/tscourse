var MathUtils;
(function (MathUtils) {
    function add(a, b) {
        return a + b;
    }
    MathUtils.add = add;
    function subtract(a, b) {
        return a - b;
    }
    MathUtils.subtract = subtract;
    add(1, 2);
})(MathUtils || (MathUtils = {}));
// addEventListener(1,2)
const sum = MathUtils.add(1, 2);
const diff = MathUtils.subtract(1, 2);
const _user = {
    id: 0,
    name: "Artash"
};
const product = {
    id: 0,
    name: "Laptop",
    price: 123
};
export {};
