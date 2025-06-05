// Readonly

{

interface IUserReadonly {
    readonly id: number;
    name: string;
    readonly birtDay: Date;
}

const use: IUserReadonly = {
    id: 1,
    name: "Will",
    birtDay: new Date("1990-01-01")
}

// user.id = 2;
// user.name = "Alex"

const numbers: readonly number[] = [1,2,3,4,5]

// numbers.push(1);
// numbers[2] = 3;
const point: readonly [number, number] = [10, 20]
// point.push(1);

// ====================
class Article {
    readonly id: number;
    title: string;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }

    changeId(newId: number): void {
        // this.id = newId;
    }
}

}