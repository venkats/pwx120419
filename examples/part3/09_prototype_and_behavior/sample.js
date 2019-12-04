class Car {
  constructor(year) { this.year = year; }
  
  drive(distance) { this.miles += distance; }
}

Car.prototype.miles = 0;

const car1 = new Car(2019);
console.log(car1.miles);

const car2 = new Car(2019);
console.log(car2.miles);

console.log(car1 === car2);
console.log(Object.getPrototypeOf(car1) === Object.getPrototypeOf(car2));
         
console.log(`car1 has miles? ${car1.hasOwnProperty('miles')}`);
console.log(`car2 has miles? ${car2.hasOwnProperty('miles')}`);

car1.drive(10);
console.log(car1.miles);

console.log(car2.miles);
console.log(`car1 has miles? ${car1.hasOwnProperty('miles')}`);
console.log(`car2 has miles? ${car2.hasOwnProperty('miles')}`);


//gets are deep but sets are shallow.