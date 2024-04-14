const palindromes = function (str) {
  const reverseStr = str.split("").reverse().join("");
  return reverseStr === str;
};

// Do not edit below this line
module.exports = palindromes;
