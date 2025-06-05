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

// ---------------------
type UserType = {
    name: string;
    age: number;
    email: string;
    greet: () => string;
}

const user2: UserType = {
    name: "Jane",
    age: 23,
    email: "test2@mail.ru",
    greet(): string {
        return `Hello, my name is ${this.name}`
    }
}

console.log(user2.greet());


// --------------

interface IExtenderUserInterface extends IUserInterface {
    role: string;
}

interface IExtenderUserInterface {
    role2: string;
}

const user3: IExtenderUserInterface = {
    name: "Max",
    age: 25,
    email: "test2@mail.ru",
    role: 'User',
    role2: 'User-pro',
    greet(): string {
        return `Hello, my name is ${this.name}`
    }
}

console.log(user3.greet());
