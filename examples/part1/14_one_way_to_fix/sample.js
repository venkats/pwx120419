let foo = function() { console.log('foo called...'); }

foo();

foo = function() { console.log('foo redefined called...'); }

foo();

//one way to fix it.