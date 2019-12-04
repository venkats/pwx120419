class Car {
  constructor(year) {
    this.year = year;
    this.distance = 0;
  }                   
  
  drive(distance) {
    this.distance += distance;
  }
  
  static info() {
    console.log('some info on the Car');
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
car1.drive(10);
console.log(car1);

Car.info();

//car1.info(); //ERROR

//drive is part of the prototype
//info is part of the Car