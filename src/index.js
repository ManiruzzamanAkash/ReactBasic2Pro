console.log("Day 5");

// const getScore = function (score) {
//   return score + 20;
// };

const getScore = (score) => score + 20;
const getScore2 = () => 100;
const totalScore = (score1, score2) => {
  if (score1 > 50) {
    return score2;
  } else {
    return score1 + score2;
  }
};

console.log(getScore(10));
console.log(getScore2());
console.log(totalScore(10, 1000));

function getRepositories() {
  return fetch("https://api.github.com/users/maniruzzamanakash/repos")
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      return error;
    });
}

const getRepositoriesArrowFunc = () => {
  return fetch("https://api.github.com/users/maniruzzamanakash/repos")
    .then((response) => response.json())
    .catch((error) => error);
};

console.log(getRepositories());
console.log(getRepositoriesArrowFunc());

const arrays = [10, 20, 300, 400];
let newArray = [];
arrays.forEach(function (item) {
  if (item > 100) {
    newArray.push(item);
  }
});
console.log(newArray);

const newArrayArrowFunc = arrays.filter((item) => item > 100);
console.log(newArrayArrowFunc);

const address = {
  city: "Dhaka",
  zip: 1213,
  details: function () {
    return `You Live in ${this.city} at zip - ${this.zip}`;
  },
};

console.log(address.details());
