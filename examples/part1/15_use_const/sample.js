const foo = function() { console.log('foo called...'); }

foo();

//foo = function() { console.log('foo redefined called...'); } //ERROR

foo();

//better to define using const instead of let