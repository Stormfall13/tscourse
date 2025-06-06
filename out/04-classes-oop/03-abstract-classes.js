"use strict";
// Абстракатные классы
class Shape {
    displayShapeType(shapeType) {
        console.log(`Это ${shapeType}`);
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const myCircle = new Circle(5);
myCircle.displayShapeType("Круг");
console.log(myCircle.calculateArea());
const myRectangle = new Rectangle(4, 6);
myRectangle.displayShapeType("Прямоугольник");
console.log(myRectangle.calculateArea());
