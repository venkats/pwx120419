class Car {
  constructor(year) {
    this.year = year;
    this.distance = 0;
  }                   
  
  drive(distance) {
    this.distance += distance;
  }                           
  
  toString() {
    return `made in ${this.year} has ${this.distance} miles`;
  }
}

/*
Creating an object involves 3 steps:
1. Allocated memory
2. Assign the prototype of the class to the object
3. Run the constructor on the object
*/

const car1 = new Car(2019);
console.log(Object.getPrototypeOf(car1));


const car2 = new Car(2020);
console.log(Object.getPrototypeOf(car2));

console.log(Object.getPrototypeOf(car1) === Object.getPrototypeOf(car2));

