// // // console.log("Part 2: Functions ready!");

// // // // Functions - Declarations and Expressions
// // // console.log("==== FUNCTIONS ===");

// // // // Function Declaration
// // // function logger() {
// // //     console.log("M name is Fons");
// // // }

// // // // Calling / Running / Invoking function
// // // logger();
// // // logger();
// // // logger();

// // // // Function with Parameters
// // // function fruitProcessor(apples, oranges) {
// // //     console.log(apples, oranges);
// // //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// // //     return juice;
// // // }

// // // console.log (fruitProcessor(5, 3));

// // // const juice1 = fruitProcessor(5, 0);
// // // const juice2 = fruitProcessor(2, 4);
// // // const juice3 = fruitProcessor(3, 2);
// // // console.log(juice1);

// // // //Function Expression
// // // const calcAge2 = function(birthYear) {
// // //     return 2025 - birthYear;
// // // }

// // // console.log(calcAge2(2004));
// // // console.log(calcAge2(1996));

// // // function introduce(firstName, lastName,age) {
// // //     const introduction = `Hi, I'm ${firstName} ${lastName}, and I'm ${age} years old.`;
// // //     return introduction;
// // // }

// // // console.log(introduce("Fons", "Jose", "19"));

// // // function yearUntilRetirement(birthYear, firstName) {
// // //     const age = 2025 - (birthYear);
// // //     const retirement = 65 - age;

// // //     if (retirement > 0) {
// // //         return `${firstName} retires in ${retirement} years.`;
// // //     } else {
// // //         return `${firstName} has already retired.`;
// // //     }   
// // // }

// // // console.log(yearUntilRetirement(2004, "Fons"));

// // // //gloal scope
// // // const globalVar = "I'm a global";

// // // function testScope() {
    
// // //     const localVar = "I'm a local";
// // //     console.log(globalVar);
// // //     console.log(localVar);
// // // }

// // // testScope();
// // // console.log(globalVar);

// // // // Function to calculate average of 3 scores
// // // function calcAverage(score1, score2, score3) {
// // //     return (score1 + score2 + score3) / 3;
// // // }
 
// // // function checkWinner(avgDolphins, avgKoalas) {
// // //     if (avgDolphins >=2 * avgKoalas) {
// // //         return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
// // //     } else if (avgKoalas >= 2 * avgDolphins) {
// // //         return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
// // //     } else {
// // //         return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`;
// // //     }
// // // }
 
// // // let scoreDolphins = calcAverage(44, 23, 71); 
// // // let scoreKoalas   = calcAverage(60, 50, 58); 
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));
 
// // // scoreDolphins = calcAverage(85, 54, 41); 
// // // scoreKoalas   = calcAverage(23, 34, 27); 
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));
 
// // // scoreDolphins = calcAverage(60, 50, 4); 
// // // scoreKoalas   = calcAverage(55, 60, 51); 
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));
 

// // // Hour 2 
// // console.log("Part 2: Arrays ready!");
// // //creating arrays
// // const student1Grade = 85;
// // const student2Grade = 92;
// // const student3Grade = 78;

// // const grades = [85, 92, 78, 96, 88];
// // console.log(grades)
// // //friends 
// // const friends = ["Josh", "Mark", "Adrian"];
// // console.log(friends);

// // // Different data types in same array
// // const mixed = ["Jonas", 27, true, friends];
// // console.log(mixed);
 
 
// // // array elements
// // const years = new Array(1991, 1984, 2008, 2020);
// // console.log(years);
 
// // // array starts counting from 0
// // console.log(friends[0]);
// // console.log(friends[2]);
// // console.log(friends.length);
// // console.log(friends[friends.length - 1]);
 
// // friends[1] = "Rainy"; // can change values in array
// // console.log(friends);
 
// // // arrays with expressions
// // const firstName = "Fons";
// // const jonas = [firstName, "Jose", 2025 - 2005];
// // console.log(jonas);
 
// // const calcAge = function (birthYear) {
// //     return 2025 - birthYear;
// // };
 
// // const ages = [calcAge(2005), calcAge(2004), calcAge(2002)];
// // console.log(ages);

// // //array methods - add elements
// // const newLength = friends.push("Mark");
// // console.log(friends);
// // console.log(newLength);


// // //removing elements
// // const popped = friends.pop(); // last
// // const popped2 = friends.pop();
// // console.log(popped);
// // console.log(friends);

// // const shifted = friends.shift(); // first
// // console.log(shifted);
// // console.log(friends);

// // //find element
// // //IndexOf
// // console.log(friends.indexOf("Josh"));
// // console.log(friends.indexOf("Adrian"));

// // //includes
// // console.log(friends.includes("Josh"));
// // console.log(friends.includes("Rainy"));

// // //array iteration - loops
// // for (let i = 0; i < friends.length; i++) {
// //     console.log(friends[i]);
    
// // }

// // friends.forEach(
// //     function(friend, index) {
// //         console.log(`Friend ${index + 1}: ${friend}`);
// //     });
    
// //  const grades2 = [85, 92, 78, 96, 88, 67, 73, 81, 95, 89];
// //  let total = 0;
// //     for (let i = 0; i < grades2.length; i++) {
// //         total += grades2[i];
// //     }

// //     const average = total / grades2.length;
// //     console.log(`Average grade: ${average. toFixed(2)}`);

// //     let passedCount = 0;
// //     grades2.forEach(function(grade) {
// //         if(grade >= 70) passedCount++;
// //     });
// //     console.log(`${passedCount} out of ${grades2.length} students passed.`);

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];
 
// function calculateAverage(grades) {
//     let sum = 0;
//     for (let i = 0; i < grades.length; i++) {
//     sum += grades[i];
//     }
// return sum / grades.length;
// }
 
// function findHighestGrade(grades) {
//     let highest = grades[0];
//     for (let i = 1; i < grades.length; i++) {
//     if (grades[i] > highest) {
//         highest = grades[i];
//     }
//     }
// return highest;
// }
 
// function findLowestGrade(grades) {
//     let lowest = grades[0];
//     for (let i = 1; i < grades.length; i++) {
//     if (grades[i] < lowest) {
//         lowest = grades[i];
//     }
// }
// return lowest;
// }
 
// function countPassing(grades, passingGrade) {
// let count = 0;
//     for (let i = 0; i < grades.length; i++) {
//     if (grades[i] >= passingGrade) {
//         count++;
//     }
//     }
// return count;
// }
 
// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);
 
// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(1)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);

// // Hour 3


// //The Array Problem
// const fonsArray = [
//     "Fons",
//     "Jose",
//     2025 - 2004,
//     "Student",
//     ["Josh", "Mark", "Adrian"]
// ];

// console.log(fonsArray[0]);
// console.log(fonsArray[1]);

// const fonsObject = {
//     firstName: 'Fons',
//     lastName: 'Jose',
//     age: 2025 - 2004,
//     job: "Student",
//     friends: ["Josh", "Mark", "Adrian"],
// };
// console.log(fonsObject);

// //Property access methods
// //Dot notation
// console.log(fonsObject.firstName);
// console.log(fonsObject.lastName);
// console.log(fonsObject.age);

// //Bracket notation
// console.log(fonsObject['firstName']);
// console.log(fonsObject['lastName']);
// console.log(fonsObject['age']);

// const nameKey = "Name";
// console.log(fonsObject['first' + nameKey]);

// //modifying existing properties
// fonsObject.job = "Programmer";
// fonsObject["age"] = 21;
// console.log(fonsObject);

// //adding new properties
// fonsObject.location = "Philippines";
// fonsObject['twitter'] = "@fonsjose";
// fonsObject.hasDriversLicense = true;
// console.log(fonsObject);

// //when to use dot vs bracket notation
// //Object Methods
// const property = "job";
// console.log(fonsObject[property]);

// //Object vs Arrays Decision Making

// const listOfYears = [1991, 1984, 2008, 2020];
// const shoppingList = ["apples", "bananas", "milk", "bread"];
// const testScores = [85, 92, 78, 96];

// const person = {
//   name: "Fons",
//   age: 21,
//   occupation: "Student",
// };

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "blue",
// };

// //objects can contains arrays, arrays can contain objects
// const student = {
//   name: "Sarah",
//   grades: [85, 92, 78], 
//   address: {
//     street: "123 Main St",
//     city: "NewYork",
// },
// };

// console.log(student.grades[0]);
// console.log(student.address.city);

// //Object Methods

// const  fons = {
//     firstName: "Fons",
//     lastName: "Jose",
//     birthYear: 2004,
//     job: "Student",
//     friends: ["Josh", "Mark", "Adrian"], 
//     hasDriversLicense: true,

//      calcAge: function (birthYear) {
//     return 2025 - birthYear;
//   },
// };

// console.log(fons.calcAge(2004));
// console.log(fons.calcAge(fons.birthYear));  

// const fonsImproved = {
//     firstName: "Fons",
//     lastName: "Jose",
//     birthYear: 2004,
//     job: "Student",
//     friends: ["Josh", "Mark", "Adrian"], 
//     hasDriversLicense: false,

//      calcAge: function () {
//     this.age = 2025 - this.birthYear;
//     return this.age;
//      },

//         getSummary: function() {
//             return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
//         }
//     };

//     console.log(fonsImproved.calcAge());
//     console.log(fonsImproved.age);
//     console.log(fonsImproved.getSummary());


//     // Complex Object with multiple methods 
//     const bankAccount = { 
//         owner: "Fons Jose",
//         movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//         interestRate: 1.2, 
//         pin: 1111,

//     //Method to calculate balance
//     calcBalance: function() {
//         this.balance = this.movements.reduce((acc, mov) => acc + mov, 0);
//         return this.balance;
//     },

//     // Method to add a movement
//     deposit: function (amount) {
//         this.movements.push(amount);
//         this.calcBalance(); 
//     },

//     withdraw: function (amount) {
//         this.movements.push(-amount);
//         this.calcBalance(); 
//     },

//     //Method for account summary
//     getStatement: function() {
//         return `${this.owner}'s account balance: ${this.calcBalance()}`;
//     },
//     };



//     console.log(bankAccount.getStatement());
//     bankAccount.deposit(500);
//     console.log(bankAccount.getStatement());


//     // Coding Challenge #3 - User Profile System

// const user = {
//   firstName: "Sarah",
//   lastName: "Johnson",
//   birthYear: 1995,
//   location: "New York",
//   interests: ["photography", "travel", "coding"],
//   friends: [
//     { name: "Michael", status: "active" },
//     { name: "Emma", status: "inactive" },
//     { name: "David", status: "active" },
//   ],
//   isActive: true,

//   // Calculate age method
//   calcAge: function () {
//     const currentYear = new Date().getFullYear();
//     this.age = currentYear - this.birthYear;
//     return this.age;
//   },

//   // Add friend method
//   addFriend: function (name, status = "active") {
//     this.friends.push({ name, status });
//     return this.friends.length;
//   },

//   // Get active friends count
//   getActiveFriends: function () {
//     return this.friends.filter(friend => friend.status === "active").length;
//   },

//   // Toggle active status
//   toggleStatus: function () {
//     this.isActive = !this.isActive;
//     return this.isActive;
//   },

//   // Generate profile summary
//   getSummary: function () {
//     this.calcAge();
//     return `
// ==============================
// User Profile Summary
// ------------------------------
// ${this.firstName} ${this.lastName}
// ${this.age}
// ${this.location}
// ${this.isActive ? "Online" : "Offline"}
// ${this.friends.length} total (${this.getActiveFriends()} active)
// ${this.interests.join(", ")}
// ==============================
//     `;
//   },
// };

// // Test your user profile system
// console.log(user.getSummary());
// user.addFriend("Alex", "active");
// user.toggleStatus();
// console.log(`\nAfter updates:`);
// console.log(user.getSummary());

// // Selecting DOM Elements

// // querySelector - works with any CSS selector
// const message = document.querySelector(".message"); 
// console.log(message);
// const button = document.querySelector("#btn"); 
// console.log(button);
// const heading = document.querySelector("h1"); 
// console.log(heading);

// console.log(message.textContent);
// console.log(button.id);
// console.log(heading.tagName);
// console.log(heading.textContent);

// //getElementById
// const buttonById = document.getElementById("btn");
// console.log(buttonById);
// console.log(butttonByID === button); 

// //querySelectorAll
// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
// console.log(allParagraphs[0]);

//modifying element content
const message = document.querySelector(".message");

//Text Content
console.log(message.textContent);
message.textContent = "Hello From JavaScript!";
console.log(message.textContent);

//innerHTML 
message.innerHTML = "<strong>Bold Text from JS</strong>";

//innerText
console.log(message.innerText);

//input element values
const input = document.querySelector(".guess");

console.log(input.value);
input.value = "Default text";


const heading = document.querySelector("h1");
heading.style.color = "red";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "3rem";

const button = document.querySelector("#btn");
button.style.padding = "20px"; 
button.style.borderRadius = "10px";

//Event Listeners - user interactions

button.addEventListener("click", function() {
  console.log("Button wasclicked!");
  message.textContent = "You Clicked the Button!";
  message.style.color = "green";
});

let clickCount = 0;
button.addEventListener("click", function() {
  clickCount++;
  button.textContent = `Clicked ${clickCount} times`;  
  button.style.backgroundColor = 'hsl(${clickCount * 30}, 70%, 50%)';
});

//input Events
const display = document.querySelector(".message");
input.addEventListener("input", function() {
 const userText = input.value;
 display.textContent = `You typed: ${userText}`;
 display.style.fontSize = `${userText.lenght + 10}px`;
});

//keyboard events - respond to specific keys
input.addEventListener("keydown", function(event) {
  console.log(`Key pressed: ${event.key}`);

  if (event.key === `Enter`) {
    display.textContent = `You pressed Enter! Text was ${input.value}`;
  input.value = "";//clear input
  }
});

