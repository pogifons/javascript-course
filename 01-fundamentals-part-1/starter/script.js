// // // JavaScript Fundamentals - Part 1
// // // We'll write our code here!

// //HOUR 1

// // let js = "amazing"
// // console.log(40 + 8 + 23 - 10);
// // console.log("GUMANA KA");


// // console.log("=== VARIABLES ===");

// // let firstName = "Angel";
// // console.log(firstName);

// // let age = 30;
// // console.log(age);

// // age = 31;
// // console.log(age);

// // const birthYear = 2005;
// // console.log(birthYear);

// // const PI = 3.1415;
// // console.log(PI);

// // var job = "programmer";
// // job = "teacher";
// // console.log(job);

// // age = 51;

// // let lastName = "Fernando";

// // console.log("=== DATA TYPES ===");

// // //Number
// // age = 24;
// // console.log(age);
// // console.log(typeof age);

// // //String
// // let username = "infgel";
// // console.log(username);
// // console.log(typeof username);

// // //Boolean
// // let javaScriptIsFun = true;
// // console.log(javaScriptIsFun);
// // console.log(typeof javaScriptIsFun);

// // //Undefined
// // let year;
// // console.log(year);
// // console.log(typeof year);

// // //dynamic variable start as a number
// // let dynamicVariable = 23;
// // console.log(dynamicVariable, typeof dynamicVariable);

// // //change to a string
// // dynamicVariable = "Now I'm a string!";
// // console.log(dynamicVariable, typeof dynamicVariable);

// // //change to a boolean
// // dynamicVariable = true;
// // console.log(dynamicVariable, typeof dynamicVariable);

// //HOUR 2
// //basic operators
// console.log("=== MATH OPERATORS ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// //math operations
// console.log("Math Operations:");
// console.log("Addition:", 10 + 5);
// console.log("Subtraction:", 20 - 8);
// console.log("Multiplication:", 4 * 7);
// console.log("Division:", 15 / 3);
// console.log("Exponentiation:", 2 ** 3);

// //string concatenation
// const firstName = "Angel";
// const lastName = "Fernando";
// console.log(firstName + " " + lastName);

// console.log("Hello " + "World" + "!");
// console.log("I am " + 20 + " years old");

// //assignment operators
// console.log ("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 5;
// console.log("x start as:", x);

// x += 10; // Same as: x = x + 10 = 25
// console.log("After x += 10:", x);

// x *= 4; // Same as: x = x * 4 = 100
// console.log("After x *= 4:", x);

// x /= 2; // Same as: x = x / 2 = 50
// console.log("After x /= 2:", x);

// x++; // Same as: x = x + 1
// console.log("After x++:", x); // 51

// x--; // Same as: x = x - 1
// x--; // Again: x = x - 1
// console.log("After x-- twice:", x); // 49

// //comparison operators
// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age Comparison:");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas <30);

// console.log("Number Comparison:");
// console.log (25 > 20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);

// //storing comparison results
// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge);

// const isJonasOlder = ageJonas > ageSarah;
// console.log("Jonas is older:", isJonasOlder); // true

// //complex comparison
// console.log("Complex Comparison:");
// console.log(now - 1991 > now - 2018);

// //assignment precedence
// let z, y;
// z = y = 25 - 10 - 5;
// console.log(z, y);

// //parentheses override everything
// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// //CODING CHALLENGE #1: BMI CALCULATOR

// // Test Data 1
// const massMark1 = 78;
// const heightMark1 = 1.69;
// const massJohn1 = 92;
// const heightJohn1 = 1.95;

// //calculate BMI
// const BMIMark1 = massMark1 / (heightMark1 * heightMark1);
// const BMIJohn1 = massJohn1 / (heightJohn1 ** 2);

// //markHigherBMI1
// const markHigherBMI1 = BMIMark1 > BMIJohn1;

// //Results
// console.log("Test Data 1:");
// console.log("Mark's BMI:", BMIMark1.toFixed(2));
// console.log("John's BMI:", BMIJohn1.toFixed(2));
// console.log("Does Mark have a higher BMI?", markHigherBMI1);

// // Test Data 2
// const massMark2 = 95;
// const heightMark2 = 1.88;
// const massJohn2 = 85;
// const heightJohn2 = 1.76;

// //calculate BMI
// const BMIMark2 = massMark2 / (heightMark2 ** 2);
// const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);

// //markHigherBMI2
// const markHigherBMI2 = BMIMark2 > BMIJohn2;

// //Results
// console.log("Test Data 2:");
// console.log("Mark's BMI:", BMIMark2.toFixed(2));
// console.log("John's BMI:", BMIJohn2.toFixed(2));
// console.log("Does Mark have a higher BMI?", markHigherBMI2);

//HOUR 3 - STRINGS AND DECISION

// Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

//the modern way
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

//template  literal superpowers
console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math works: ${2 + 3} equals five`);
console.log(`Comparisons too: ${5 > 3}`);

