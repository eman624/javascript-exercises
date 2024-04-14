const add = function (x, y, array) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, curr) => acc * curr);
};

const power = function (x, y) {
  return Math.pow(x, y);
};

const factorial = function (x) {
  if (x === 0 || x === 1) return 1;
  for (var i = x - 1; i >= 1; i--) {
    x *= i;
  }
  return x;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
