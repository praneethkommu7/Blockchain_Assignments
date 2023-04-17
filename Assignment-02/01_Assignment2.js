function typeOfTriangle(x, y, z) {
    if(x == y && y == z) {
        console.log("Equilateral Triangle");
    }
    else if( x == y || y == z || z == x) {
        console.log("Isosceles Triangle");
    }
    else {
        console.log("Scalene Triangle");
    }
}

typeOfTriangle(7,7,7);  // Equilateral Triangle
typeOfTriangle(7,1,7);  // Isosceles Triangle
typeOfTriangle(7,8,9);  // Scalene Triangle
