const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (arr) {
  const birthYear = arr.map((birth) => birth.yearOfBirth);
  const deathYear = arr.map((death) => death.yearOfDeath);
  const age = [];

  for (let i = 0; i < arr.length; i++) {
    age.push(deathYear[i] - birthYear[i]);
  }

  let oldest = age[0];
  let maxIndex = 0;

  for (let i = 1; i < age.length; i++) {
    if (age[i] > oldest) {
      oldest = age[i];
      maxIndex = i;
    }
  }

  return arr[maxIndex];
  //   console.log(arr[maxIndex].name);
};

findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
