'use strict';
//Try running this code after commenting out the above code
function outer() {
  for(i = 0; i < 5; i++) {
    inner();
  }
}

function inner() {
  for(i = 0; i < 3; i++) {
    console.log('hi');
  }
}

outer();