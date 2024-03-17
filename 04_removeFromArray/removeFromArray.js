const removeFromArray = function () {
  const arr = Array.from(arguments[0]);
  const numWordFilter = Array.prototype.slice.call(arguments, 1);

  const result = arr.filter((item) => !numWordFilter.includes(item));
  console.log("result: " + result);
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
