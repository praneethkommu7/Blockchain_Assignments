class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    area() {
        const area = this.length * this.width;
        console.log(area);
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side,side);
    }
}

const rectangle = new Rectangle(4,54);
rectangle.area();

const square = new Square(4);
square.area();