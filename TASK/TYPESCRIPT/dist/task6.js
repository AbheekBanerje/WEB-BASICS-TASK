class Vehicle {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
}
class Car extends Vehicle {
    start() {
        console.log(`${this.brand} car started`);
    }
}
const car1 = new Car("Toyota");
car1.start();
export {};
