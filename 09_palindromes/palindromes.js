const palindromes = function (str) {
  const regex = /[^A-Za-z0-9]/g;

  const lowRegStr = str.toLowerCase().replace(regex, "");
  const reverseStr = lowRegStr.split("").reverse().join("");

  console.log(reverseStr);
  return reverseStr === lowRegStr;
};

// Do not edit below this line
module.exports = palindromes;
