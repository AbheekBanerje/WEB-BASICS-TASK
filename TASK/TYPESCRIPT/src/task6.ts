abstract class Vehicle {
  constructor(public brand: string) {}

  abstract start(): void;
}

class Car extends Vehicle {
  start() {
    console.log(`${this.brand} car started`);
  }
}

const car1 = new Car("Toyota");
car1.start();