const canVote = function(name, age) {
  return typeof(age) === 'number' && age > 17;
}

const getVoters = function(folks) {
//  return folks.filter(person => canVote(person[0], person[1]))
//    .map(person => person[0]);

//destructuring
//  return folks.filter(([name, age]) => canVote(name, age))
//    .map(([name, age]) => name);

  return folks.filter(person => canVote(...person))
    .map(([name]) => name);

}

module.exports = {
  canVote: canVote,
  getVoters: getVoters
};
