//let is a direct replacement for var moving forward
//let does not permit redefinition of a variable (though you may
//reassign a value to the variable).
//let has a block scope.

function foo() {
  let max = 1000;
  console.log(max);
  
  //let max = 2000; //ERROR if uncommented
  max = 2000;
  console.log(max);
  
  {
    let local = 2;
    console.log(local);
  }
  
  //console.log(local); //ERROR if uncommented
} 

foo();


