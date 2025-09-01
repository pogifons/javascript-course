// // console.log("Part 2: Functions ready!");

// // // Functions - Declarations and Expressions
// // console.log("==== FUNCTIONS ===");

// // // Function Declaration
// // function logger() {
// //     console.log("M name is Fons");
// // }

// // // Calling / Running / Invoking function
// // logger();
// // logger();
// // logger();

// // // Function with Parameters
// // function fruitProcessor(apples, oranges) {
// //     console.log(apples, oranges);
// //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //     return juice;
// // }

// // console.log (fruitProcessor(5, 3));

// // const juice1 = fruitProcessor(5, 0);
// // const juice2 = fruitProcessor(2, 4);
// // const juice3 = fruitProcessor(3, 2);
// // console.log(juice1);

// // //Function Expression
// // const calcAge2 = function(birthYear) {
// //     return 2025 - birthYear;
// // }

// // console.log(calcAge2(2004));
// // console.log(calcAge2(1996));

// // function introduce(firstName, lastName,age) {
// //     const introduction = `Hi, I'm ${firstName} ${lastName}, and I'm ${age} years old.`;
// //     return introduction;
// // }

// // console.log(introduce("Fons", "Jose", "19"));

// // function yearUntilRetirement(birthYear, firstName) {
// //     const age = 2025 - (birthYear);
// //     const retirement = 65 - age;

// //     if (retirement > 0) {
// //         return `${firstName} retires in ${retirement} years.`;
// //     } else {
// //         return `${firstName} has already retired.`;
// //     }   
// // }

// // console.log(yearUntilRetirement(2004, "Fons"));

// // //gloal scope
// // const globalVar = "I'm a global";

// // function testScope() {
    
// //     const localVar = "I'm a local";
// //     console.log(globalVar);
// //     console.log(localVar);
// // }

// // testScope();
// // console.log(globalVar);

// // // Function to calculate average of 3 scores
// // function calcAverage(score1, score2, score3) {
// //     return (score1 + score2 + score3) / 3;
// // }
 
// // function checkWinner(avgDolphins, avgKoalas) {
// //     if (avgDolphins >=2 * avgKoalas) {
// //         return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
// //     } else if (avgKoalas >= 2 * avgDolphins) {
// //         return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
// //     } else {
// //         return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`;
// //     }
// // }
 
// // let scoreDolphins = calcAverage(44, 23, 71); 
// // let scoreKoalas   = calcAverage(60, 50, 58); 
// // console.log(checkWinner(scoreDolphins, scoreKoalas));
 
// // scoreDolphins = calcAverage(85, 54, 41); 
// // scoreKoalas   = calcAverage(23, 34, 27); 
// // console.log(checkWinner(scoreDolphins, scoreKoalas));
 
// // scoreDolphins = calcAverage(60, 50, 4); 
// // scoreKoalas   = calcAverage(55, 60, 51); 
// // console.log(checkWinner(scoreDolphins, scoreKoalas));
 

// // Hour 2 
// console.log("Part 2: Arrays ready!");
// //creating arrays
// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;

// const grades = [85, 92, 78, 96, 88];
// console.log(grades)
// //friends 
// const friends = ["Josh", "Mark", "Adrian"];
// console.log(friends);

// // Different data types in same array
// const mixed = ["Jonas", 27, true, friends];
// console.log(mixed);
 
 
// // array elements
// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);
 
// // array starts counting from 0
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
 
// friends[1] = "Rainy"; // can change values in array
// console.log(friends);
 
// // arrays with expressions
// const firstName = "Fons";
// const jonas = [firstName, "Jose", 2025 - 2005];
// console.log(jonas);
 
// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// };
 
// const ages = [calcAge(2005), calcAge(2004), calcAge(2002)];
// console.log(ages);

// //array methods - add elements
// const newLength = friends.push("Mark");
// console.log(friends);
// console.log(newLength);


// //removing elements
// const popped = friends.pop(); // last
// const popped2 = friends.pop();
// console.log(popped);
// console.log(friends);

// const shifted = friends.shift(); // first
// console.log(shifted);
// console.log(friends);

// //find element
// //IndexOf
// console.log(friends.indexOf("Josh"));
// console.log(friends.indexOf("Adrian"));

// //includes
// console.log(friends.includes("Josh"));
// console.log(friends.includes("Rainy"));

// //array iteration - loops
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
    
// }

// friends.forEach(
//     function(friend, index) {
//         console.log(`Friend ${index + 1}: ${friend}`);
//     });
    
//  const grades2 = [85, 92, 78, 96, 88, 67, 73, 81, 95, 89];
//  let total = 0;
//     for (let i = 0; i < grades2.length; i++) {
//         total += grades2[i];
//     }

//     const average = total / grades2.length;
//     console.log(`Average grade: ${average. toFixed(2)}`);

//     let passedCount = 0;
//     grades2.forEach(function(grade) {
//         if(grade >= 70) passedCount++;
//     });
//     console.log(`${passedCount} out of ${grades2.length} students passed.`);

const grades = [78, 85, 92, 67, 88, 95, 73, 82];
 
function calculateAverage(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
    }
return sum / grades.length;
}
 
function findHighestGrade(grades) {
    let highest = grades[0];
    for (let i = 1; i < grades.length; i++) {
    if (grades[i] > highest) {
        highest = grades[i];
    }
    }
return highest;
}
 
function findLowestGrade(grades) {
    let lowest = grades[0];
    for (let i = 1; i < grades.length; i++) {
    if (grades[i] < lowest) {
        lowest = grades[i];
    }
}
return lowest;
}
 
function countPassing(grades, passingGrade) {
let count = 0;
    for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= passingGrade) {
        count++;
    }
    }
return count;
}
 
const average = calculateAverage(grades);
const highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);
 
console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(1)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);

// Hour 3

//Object Methods

const  fons = {
    firstName: "Fons",
    lastName: "Jose",
    birthYear: 2004,
    job: "Student",
    friends: ["Josh", "Mark", "Adrian"], 
    hasDriversLicense: true,

     calcAge: function (birthYear) {
    return 2025 - birthYear;
  },
};

console.log(fons.calcAge(2004));
console.log(fons.calcAge(fons.birthYear));  

const fonsImproved = {
    firstName: "Fons",
    lastName: "Jose",
    birthYear: 2004,
    job: "Student",
    friends: ["Josh", "Mark", "Adrian"], 
    hasDriversLicense: false,

     calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
     },

        getSummary: function() {
            return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
        }
    };

    console.log(fonsImproved.calcAge());
    console.log(fonsImproved.age);
    console.log(fonsImproved.getSummary());


    // Complex Object with multiple methods 
    const bankAccount = { 
        owner: "Fons Jose",
        movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
        interestRate: 1.2, 
        pin: 1111,

    //Method to calculate balance
    calcBalance: function() {
        this.balance = this.movements.reduce((acc, mov) => acc + mov, 0);
        return this.balance;
    },

    // Method to add a movement
    deposit: function (amount) {
        this.movements.push(amount);
        this.calcBalance(); 
    },

    withdraw: function (amount) {
        this.movements.push(-amount);
        this.calcBalance(); 
    },

    //Method for account summary
    getStatement: function() {
        return `${this.owner}'s account balance: ${this.calcBalance()}`;
    },
    };



    console.log(bankAccount.getStatement());
    bankAccount.deposit(500);
    console.log(bankAccount.getStatement());