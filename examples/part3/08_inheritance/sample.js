class Person {
  constructor(first, last) {
    this.first = first;    
    this.last = last;
  }                    
  
  toString() {
    return `Person: ${this.first} ${this.last}`;
  }
}                           

//constructor is given we don't have to write one.
class CoolPerson extends Person {
  toString() {
    return `Cool${super.toString()}`;
  }                                  
}

const alan = new CoolPerson('Alan', 'Turning');
console.log(alan.toString());