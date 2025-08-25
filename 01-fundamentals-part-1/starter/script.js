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
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// //the modern way
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

// //template  literal superpowers
// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works: ${2 + 3} equals five`);
// console.log(`Comparisons too: ${5 > 3}`);

// //Exercise 1: Personal Introduction
// const myName = "Fons";
// const myAge = 21;
// const myJob = "student";
// const currentYear = 2025;

// const introduction1 = `Hi, I'm ${myName}, a ${myAge} year old ${myJob}!`;
// console.log(introduction1);

// const introduction2 = `Born in ${currentYear - myAge}, 10*5 = ${10 * 5}, Adult: ${myAge >= 18}`;
// console.log(introduction2);

// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear2 = 2012;
// let century;
// if (birthYear <= 2004) {
//   century = 21;
// } else {
//   century = 22;
// }
// console.log(century);

// const score = 85;

// if (score >= 60) {
//   console.log(`You passed with ${score} points! 🎉`);
//   console.log("Congratulations!");
// } else {
//   const pointsNeeded = 60 - score;
//   console.log(`You failed. Need ${pointsNeeded} more points.`);
// }

// // Create a grade calculator:
// const testScore = 78; 

// if (testScore >= 90) {
//   console.log("Excellent! Grade A");
// } else if (testScore >= 80) {
//   console.log("Good job! Grade B");
// } else if (testScore >= 70) {
//   console.log("Not bad! Grade C");
// } else if (testScore >= 60) {
//   console.log("You passed! Grade D");
// } else {
//   console.log("You failed! Study harder");
// }

// // Create an age verification system:
// const userAge = 20; 

// if (userAge >= 18) {
//   console.log("Welcome! You can access all content");
// } else if (userAge >= 13) {
//   console.log("Welcome! Restricted content only");
// } else {
//   console.log("Sorry, you're too young");
// }

// // Truthy and Falsy Values

// // 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0)); 
// console.log(Boolean(undefined)); 
// console.log(Boolean("Jonas")); 
// console.log(Boolean({}));
// console.log(Boolean(""));

// //Practical Applications
// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// //Common Gotcha - Be Careful!
// let height = 0; 
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// if (height !== undefined) {
//   console.log("Height is defined");
// }

// const values = [0, 1, "", "hello", undefined, null, NaN, {}, []];

// for (const value of values) {
//   console.log("Value:", value);
//   console.log("Boolean:", Boolean(value));
  
//   if (value) {
//     console.log("Truthy!");
//   } else {
//     console.log("Falsy!");
//   }

//   console.log("---------------");
// }

// HOUR 4

// Type Conversion and Coercion
const inputYear = "2004";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 17);

console.log(Number("Fons"));
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof String(23));

console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" * "2");

// Excercise 1: Type Conversion Detective
console.log("5" + 2);
console.log("5" - 2); 
console.log("5" * 2); 
console.log("5" / 2); 

// Convert these explicitly:
const userAge = "25"; 
const ageAsNumber = Number(userAge);
console.log(ageAsNumber, typeof ageAsNumber); 

const userScore = 95; 
const scoreAsString = String(userScore);
console.log(scoreAsString, typeof scoreAsString);

//exercise 2: fix the bug
const num1 = prompt("First number:");  
const num2 = prompt("Second number:");  

// Fix: Convert to numbers first
const sum = Number(num1) + Number(num2);

console.log(`Sum: ${sum}`);

//Strict Equality (===) - The Professional Way
const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");
console.log("18" === 18);
console.log("18" == 18);
console.log(18 === 18);

//Loose Equality (==) - The Dangerous One
console.log("0" == 0);
console.log(0 == false);
console.log("0" == false);
console.log(null == undefined);

console.log("" == 0);
console.log("   " == 0);

//Best Practice Example
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}
if (favourite !== 23) console.log("Why not 23?");

//Exercise 1: Equality Detective

console.log(5 === "5");     
console.log(5 == "5");  
console.log(true === 1);    
console.log(true == 1);         
console.log(false === 0);   
console.log(false == 0);    

//Exercise 2: Fix the Login System

const username = prompt("Username:");
const password = prompt("Password:");

if (username === "admin" && password === "1234") {
  console.log("Welcome admin!");
} else {
  console.log("Access denied");
}

// Basic Logical Operators

const hasDriversLicense = true; 
const hasGoodVision = true; 

console.log(hasDriversLicense && hasGoodVision);    
console.log(hasDriversLicense || hasGoodVision); 
console.log(!hasDriversLicense);  

//Real-World Example
const isTired = false; 
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

//Complex Logic with Parentheses
const age = 20;
const hasPermission = true;
const hasExperience = false;


if ((age >= 18 || hasPermission) && hasExperience) {
  console.log("Approved to drive");
} else {
  console.log("Not approved to drive");
}

// Exercise 1: Club Entry System

const age = 19;     
const hasID = true;     
const isVIP = false;

if ((age >= 21 && hasID) || isVIP) {
  console.log("Welcome to the club!");
} else {
  console.log("Sorry, you cannot enter");
}