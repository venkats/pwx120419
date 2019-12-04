const sam = { name: 'Sam', age: 2 };

console.log(sam);

//sam = sam; //ERROR

//const protects the reference not the object itself.
//const is like final in Java and readonly in C#               

sam.age = 3;
console.log(sam);