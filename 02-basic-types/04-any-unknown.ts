// Any и unknown
// type ANY_TODO = any;

const anyValue: any = 'this is a string';
const strLength: number = anyValue.length;
// const _strLength: number = anyValue.map((item: any) => item.length);

// unknown
let value: unknown;

value = 10;
value = "Hello";
value = true;

if (typeof value === "string"){
    console.log(value.toUpperCase());
}
