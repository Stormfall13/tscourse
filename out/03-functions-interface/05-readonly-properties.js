"use strict";
// Readonly
{
    const use = {
        id: 1,
        name: "Will",
        birtDay: new Date("1990-01-01")
    };
    // user.id = 2;
    // user.name = "Alex"
    const numbers = [1, 2, 3, 4, 5];
    // numbers.push(1);
    // numbers[2] = 3;
    const point = [10, 20];
    // point.push(1);
    // ====================
    class Article {
        id;
        title;
        constructor(id, title) {
            this.id = id;
            this.title = title;
        }
        changeId(newId) {
            // this.id = newId;
        }
    }
}
