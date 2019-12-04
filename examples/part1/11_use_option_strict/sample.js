'use strict';

const sam = Object.freeze({ name: 'Sam', age: 2 });

console.log(sam);

sam.age = 3;
console.log(sam);

//freeze is shallow it not does deep freeze