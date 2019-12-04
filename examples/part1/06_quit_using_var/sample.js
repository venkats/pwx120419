//quit using var
//sadly it allows us to redefine a variable (and that makes
//no sense)
//var does not have any block scope

function foo() {
  var max = 1000;
  console.log(max);
  
  var max = 2000; //what does that mean to refine?
  console.log(max);
  
  {
    var local = 2;
    console.log(local);
  }
  
  console.log(local);
} 

foo();


