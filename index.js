
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN === toN){
    return fromN;
  } else if (fromN === 0 && toN === 1) {
    return 1;
  } else if (fromN < toN) {
    return fromN + sum(fromN + 1, toN);
  }
};

module.exports = sum;