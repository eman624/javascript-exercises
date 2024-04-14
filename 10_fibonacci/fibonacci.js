const fibonacci = function (n) {
  const num = Number(n);
  if (num < 0) {
    return "OOPS";
  }
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

// Do not edit below this line
module.exports = fibonacci;
