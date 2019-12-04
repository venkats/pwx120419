const longestName = function(...names) {         
  if(names.length === 0) {
    return undefined;
  }
  return names.reduce((longest, name) =>
    longest.length < name.length ? name : longest);
}

const namesThatStartWith = (letter, ...names) =>
  names.filter(name => name.startsWith(letter));

const greet = (message, name) => `${message} ${name}, how're you?`;

//const greetWith = function(message) {
//  return function(name) {
//    return greet(message, name);
//  }
//}

//const greetWith = function(message) {
//  return name => greet(message, name);
//}

const greetWith = message => name => greet(message, name);

module.exports = {
  longestName,
  namesThatStartWith,
  greet,
  greetWith,
}