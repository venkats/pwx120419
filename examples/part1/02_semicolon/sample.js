//if there is no ; on a line, JavaScript checks if the
//next line can standalone. If yes, it puts ; on the current
//line
function foo(n) {
  if(n < 5) {
    return n
      * 2;
  } else {
    return n;
  }
}

console.log(foo(3));
console.log(foo(6));