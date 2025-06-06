"use strict";
// Типы пересеченя
{ // СКОУП
    const person = {
        name: 'Victor',
        age: 25,
    };
    console.log(person);
    const user = {
        id: 1,
        name: 'Vasya'
    };
    const userWithAdress = {
        // ...user,
        id: 2,
        name: "Vitalya",
        street: 'Main st. 123',
        city: "USA"
    };
    console.log(userWithAdress);
    const _status = "success";
    const _result = 1;
    console.log(_status, _result);
} // СКОУП
