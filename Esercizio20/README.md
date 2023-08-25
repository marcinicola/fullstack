# instanceof Operator

Definisci una classe chiamata "AreaCalculator".Al suo interno creare un metodo statico che permetta di calcolare l'area della figura geometrica passata come parametro.Il metodo ti consentirà di calcolare l'area del quadrato, del rettangolo e del cerchio.

class Square {
constructor(side) {
this.side = side;
}
}

class Rectangle {
constructor(width, height) {
this.width = width;
this.height = height;
}
}

class Circle {
constructor(radius) {
this.radius = radius;
}
}

class AreaCalculator {
// ...
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
