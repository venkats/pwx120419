const max = function(...numbers) {
  return numbers.reduce((large, e) =>
    large < e ? e : large);
}

const arr = [1, 7, 3];

console.log(max(arr)); //oops
console.log(max(...arr));

//on the receiving side, ... is rest
//on the sending side, ... is spread