// Утверждения типов

const someValue: any = "this is a string";
const stringLangth: number = (<string>someValue).length;

console.log(stringLangth);

const someValue1: any = "this is a string";
const stringLangth1: number = (someValue as string).length;

console.log(stringLangth1);


// ------------------
// ! non-null assertion
const myElement: HTMLElement | null = document.getElementById("myElement");

myElement!.style.color = 'red'
// myElement && (myElement.style.color = 'red')