const max = function(...numbers) {
  return numbers.reduce((large, e) =>
    large < e ? e : large);
}

console.log(max(1, 2));
console.log(max(3, 1));
console.log(max(1, 2, 5, 0, 4));