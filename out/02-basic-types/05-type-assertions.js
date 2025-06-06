"use strict";
// Утверждения типов
const someValue = "this is a string";
const stringLangth = someValue.length;
console.log(stringLangth);
const someValue1 = "this is a string";
const stringLangth1 = someValue.length;
console.log(stringLangth1);
// ------------------
// ! non-null assertion
const myElement = document.getElementById("myElement");
myElement.style.color = 'red';
// myElement && (myElement.style.color = 'red')
