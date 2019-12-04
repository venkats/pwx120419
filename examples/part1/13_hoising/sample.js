function foo() {
  console.log('foo called...');
}

foo();

function foo() {
  console.log('foo redefined called...');
}

foo();
//Surprise, the variable foo has been hoisted...