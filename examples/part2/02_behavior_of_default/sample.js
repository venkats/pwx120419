const greet = function(name, msg = 'hello') {
  console.log(`${msg} ${name}`);
}

greet('Jerry');           //default kicks in
greet('Sara', 'hi');      //hi is used
greet('Pat', null);       //null is used
greet('Jane', undefined); //default kicks in