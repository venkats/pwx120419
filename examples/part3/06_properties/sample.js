'use strict';

class Car {
  constructor(year) {
    this.year = year;
    this.distance = 0;
  }                   
  
  drive(distance) {
    this.distance += distance;
  }
  
  get miles() {
    return this.distance;
  }
  
  set miles(value) {
    if(value < this.distance) {
      throw new Error(
        `Messing with odometer, we will come burn your village.`);
    }
    
    this.distance = value;
  }                           
  
  toString() {
    return `made in ${this.year} has ${this.distance} miles`;
  }
}

const car = new Car(2019);
car.drive(10);
console.log(car.miles);

car.miles = 20;
console.log(car.miles);

try {
  car.miles = 0;
} catch(ex) {
  console.log(ex);
}