const greet = function(name, msg = 'hello') {
  console.log(`${msg} ${name}`);
}

greet('Jerry');
greet('Sara', 'hi')