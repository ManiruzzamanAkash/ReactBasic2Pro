/**
 * var Example
 */
// function checkExperienceLevelAndScore() {
//   console.log("Experience", experienceLevel); // Use Before declaration is also possible
//   var experienceLevel = "beginner";
//   var age = 25;
//   if (age > 20) {
//     var totalScore = 100;
//     var experienceLevel = "Intermediate"; // Re-Declarable is possible and update the main experienceLevel variable
//   }
//   console.log("Experience", experienceLevel);
//   console.log("Score", totalScore); // Access    from outside if block scope is possible
//   for (var i = 0; i < totalScore; i++) {
//     console.log("no: ", i);
//   }
//   console.log("no out: ", i); // Access    from outside for block scope is also possible, return 100
// }

// checkExperienceLevelAndScore();

/**
 * let Example
 */
// function checkExperienceLevelAndScore() {
//   console.log("Experience", experienceLevel); // Use Before declaration will throws an error
//   let experienceLevel = "beginner";
//   let age = 25;

//   if (age > 20) {
//     let totalScore = 100;
//     let experienceLevel = "Intermediate"; // Create new experienceLevel variable, in this if scope
//   }
//   console.log("Experience", experienceLevel); // Output -> beginner. Can not access inner experienceLevel data
//   console.log("Score", totalScore); // Throws error
//   for (let i = 0; i < 100; i++) {
//     console.log("no: ", i);
//   }
//   console.log("no out: ", i); // Throws Error, Reference Error
// }

// checkExperienceLevelAndScore();

/**
 * const Example
 */
// function checkExperienceLevelAndScore() {
//   const experienceLevel = "beginner";
//   const age = 25;

//   if (age > 20) {
//     const totalScore = 100;
//     experienceLevel = "Intermediate"; // Throws Error, Can not rebind
//   }
//   const address = {
//     streetAddress: "Dhaka",
//     postalCode: 1208,
//   };
//   address.postalCode = 1209; // OK and update the postalCode to 1209

//   console.log("address: ", address); // Return Updated object with postalCode 1209
// }

// checkExperienceLevelAndScore();

/**
 * Performance Example
 */
// WITH let
console.time("let-time");
for (let i = 0; i < 50000000; i++) {}
console.timeEnd("let-time"); // 2.27490234375 ms

// WITH var
console.time("var-time");
for (var i = 0; i < 50000000; i++) {}
console.timeEnd("var-time"); // 2.5810546875 ms

/**
 * Hoisting Example
 */
console.log(nameVar); // undefined and no warning
console.log(nameConst); // ReferenceError

console.log(getAgeHostedOntop()); // Is ok,
function getAgeHostedOntop() {
  const age = 20;
  return age;
}

console.log(getAge()); // Will throw an error
const getAge = function () {
  const age = 20;
  return age;
};

var nameVar = "Akash";
const nameConst = "Akash";
