const greet = function(name, msg = `hi${name.length}`) {
  console.log(`${msg} ${name}`);
}

greet('Jerry');
