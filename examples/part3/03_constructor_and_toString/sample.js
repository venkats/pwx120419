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

const car = new Car(2019);
console.log(car);
car.drive(10);
console.log(car);