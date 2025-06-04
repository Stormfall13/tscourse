// Интерфейсы и типы

interface IUserInterface {
    name: string;
    age: number;
    email: string;
    // greet(): string;
    greet: () => string;
}

const user: IUserInterface = {
    name: "Valakas",
    age: 33,
    email: "test@mail.ru",
    greet(): string {
        return `Hello, my name is ${this.name}`
    }
}

console.log(user.greet());
