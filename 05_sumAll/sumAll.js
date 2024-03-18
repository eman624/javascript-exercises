const sumAll = function (x, y) {
  if (x < 0 || y < 0) {
    return "ERROR";
  }
  if (isNaN(x) || isNaN(y) || typeof x === "string" || typeof y === "string") {
    return "ERROR";
  }

  let sum = 0;
  if (x < y) {
    for (var i = x; i <= y; i++) {
      sum += i;
    }
  } else if (x > y) {
    for (var i = y; i <= x; i++) {
      sum += i;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
