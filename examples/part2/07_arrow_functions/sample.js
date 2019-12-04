//const greet = function(name1, name2) {
//  console.log(`Hello ${name1} ${name2}`);
//}

const greet = (name1, name2) =>   
  console.log(`Hello ${name1} ${name2}`);
                
const names = ['Jack', 'Jill'];
greet(...names);