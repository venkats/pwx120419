const names = ['Jack', 'Jill'];

for(let i = 0; i < names.length; i++) {
  console.log(`${i}  ${names[i]}`);
}
console.log('....');
for(const name of names) {
  console.log(name);
}
console.log('....');
for(const entry of names.entries()) {
  console.log(entry);
}
console.log('....');
for(const [i, name] of names.entries()) {
  console.log(`${i}  ${name}`);
}