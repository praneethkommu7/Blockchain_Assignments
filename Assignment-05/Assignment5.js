class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }
    getVolume() {
        const volume = (Math.PI * this.radius * this.radius * this.height);
        console.log(`Volume of the cylinder is ${volume.toFixed(4)}`)
    }
}

class Sphere {
    constructor(radius) {
        this.radius = radius;
    }
    getVolume() {
        const volume = (4/3 * Math.PI * this.radius * this.radius * this.radius);
        console.log(`Volume of the Sphere is ${volume.toFixed(4)}`);
    }
}

class Cone {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }
    getVolume() {
        const volume = (Math.PI * this.radius * this.radius * this.height)/3;
        console.log(`Volume of the Cone is ${volume.toFixed(4)}`);
    }
}

let cylinder = new Cylinder(4,5);
cylinder.getVolume();

let sphere = new Sphere(4);
sphere.getVolume();

let cone = new Cone(4,5);
cone.getVolume();