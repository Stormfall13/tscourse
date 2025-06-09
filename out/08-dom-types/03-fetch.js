"use strict";
const API_URL = "https://jsonplaceholder.typicode.com/todos/1";
const fetchTodos = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error(error instanceof Error ? error.message : "unknown error");
    }
};
fetchTodos();
