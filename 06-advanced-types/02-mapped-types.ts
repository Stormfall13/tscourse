{

interface IPerson{
    name: string;
    age: number;
    address: string;
}

type PartialPerson = {
    [P in keyof IPerson]?: IPerson[P];
}

const partialUser: PartialPerson = { name: "Sergo" };

// ==========================
type ReadonlyPerson = {
    readonly [P in keyof IPerson]?: IPerson[P];
}

const user: ReadonlyPerson = {
    name: "Alise",
    age: 25,
    address: "USA",
}

// user.name = "asdad"

// =================
type StringifiedPerson = {
    [P in keyof IPerson]: string;
}

const stringifiedPerson: StringifiedPerson = {
    name: "Alise",
    age: "25",
    address: "USA"
}





}