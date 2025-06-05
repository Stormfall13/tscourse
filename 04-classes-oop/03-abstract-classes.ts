// Абстракатные классы

abstract class Shape {
    abstract calculateArea(): number;

    displayShapeType(shapeType: string): void {
        console.log(`Это ${shapeType}`);
    }
}

interface ICircleProperties{
    radius: number;
}

class Circle extends Shape implements ICircleProperties {
    radius: number;

    constructor(radius: number){
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

interface IReactangleProperties {
    width: number;
    height: number;
}

class Rectangle extends Shape implements IReactangleProperties {
    width: number;
    height: number;

    constructor(width: number, height: number){
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

const myCircle = new Circle(5);
myCircle.displayShapeType("Круг");
console.log(myCircle.calculateArea());

const myRectangle = new Rectangle(4, 6);
myRectangle.displayShapeType("Прямоугольник");
console.log(myRectangle.calculateArea());