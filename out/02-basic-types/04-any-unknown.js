"use strict";
// Any и unknown
// type ANY_TODO = any;
const anyValue = 'this is a string';
const strLength = anyValue.length;
// const _strLength: number = anyValue.map((item: any) => item.length);
// unknown
let value;
value = 10;
value = "Hello";
value = true;
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
