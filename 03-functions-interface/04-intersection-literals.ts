// Типы пересеченя
{ // СКОУП

interface IName {
    name: string;
}

interface IAge {
    age: number;
}

type Person = IName & IAge;

const person: Person = {
    name: 'Victor',
    age: 25,
}

console.log(person);

// const person2: Person = {
//     name: 'Victor',
// }


// =========================
interface IAddress {
    street: string;
    city: string;
}

const user = {
    id: 1,
    name: 'Vasya'
}

type UserWithAddress = typeof user & IAddress;

const userWithAdress: UserWithAddress = {
    // ...user,
    id: 2,
    name: "Vitalya",
    street: 'Main st. 123',
    city: "USA"
}

console.log(userWithAdress);

// ==============================

type Status = "success" | "error" | "pending";
type Result = 0 | 1 | 2;

const _status: Status = "success";
const _result: Result = 1;

console.log(_status, _result);



} // СКОУП