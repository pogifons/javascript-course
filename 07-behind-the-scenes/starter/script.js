'use strict';

// function alpha() {
//     console.log('alpha:start');
//     beta();
//     console.log('alpha:end');
// }

// function beta() {
//     console.log('beta');
// }

// alpha();


// //SECTION 2

// const outer = 'global';

// function demoScope() {
//   const inner = 'function';
//   if (true) {
//     const blockConst = 'block';
//     var functionVar = 'var-function-scoped';
//     console.log(outer, inner, blockConst, functionVar);
//   }
//   console.log(outer, inner, functionVar);
// }

// demoScope();

// const name = 'GlobalName';

// function a() {
//     const name = 'FunctionName';
//     function b() {
//         console.log(name);
//     }
//     b();
// }

// a();

// //SECTION 3

// var varX = 1;
// let letX = 2;
// const constX = 3;

// console.log(varX);
// console.log(letX);
// console.log(constX);

// function addDecl(a, b) {
//     return a + b;
// }
// const addExpr = function (a, b) {
//     return a + b;
// };
// const addArrow = (a,b) => a + b;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// //hour 2

// const person = {
//     name: 'Jonas',
//     greet: function () {
//         console.log(`Hello, I am ${this.name}`);
//     },
// };

// person.greet();
// person.name = 'Fons';
// person.greet();

// const anotherPerson = {
//     name: 'Sarah',
// };

// anotherPerson.greet = person.greet;
// anotherPerson.greet();

// // This breaks in event handlers
// const button = document.querySelector('button');
// button.addEventListener('click', person.greet); // `this` becomes the button element!

// // Fix: use arrow function wrapper
// button.addEventListener('click', () => person.greet());
// // Or bind the method
// button.addEventListener('click', person.greet.bind(person));

// const obj = {
//     name:'Object',

//     regularMethod: function () {
//         console.log('Regular', this.name);
//     },

//     arrowMethod: () => {
//         console.log('Arrow', this.name);
//     },
// };

// obj.regularMethod();
// obj.arrowMethod();


// const quiz = {
//   name: 'Quiz Object',
//   regularMethod() {
//     console.log('Regular:', this.name);
//   },
//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// quiz.regularMethod(); 
// quiz.arrowMethod(); 

// const timer = {
//     name: 'Timer',

//     //Old approach with self = this
//     start: function (){
//         console.log(`${this.name} starting...`);
//         const self = this;

//         setTimeout(function () {
//             console.log(`${self.name} finished`);
//         }, 1000);
//     },

//    // Modern approach with arrow function
//   startModern: function () {
//     console.log(`${this.name} starting modern...`);

//     setTimeout(() => {
//       console.log(`${this.name} finished modern`); 
//     }, 1500);
//   },
// };

// timer.start();
// timer.startModern();

// const user = {
//   name: 'Alice',
//   hobbies: ['reading', 'coding', 'gaming'],

//   // BROKEN: arrow function loses `this`
//   printHobbiesBad: () => {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`); 
//     });
//   },

//   // FIXED: regular function preserves `this`
//   printHobbiesGood() {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`); 
//     });
//   },
// };

// user.printHobbiesBad(); 
// user.printHobbiesGood(); 

const functionTypes = {
  regularFunction: function () {
    console.log('Arguments length:', arguments.length);
    console.log('First argument:', arguments[0]);
  },

  arrowFunction: () => {
    console.log(arguments);
    console.log('Arrow function called');
  },

  modernFunction: (...args) => {
    console.log('Args length:', args.length);
    console.log('First arg:', args[0]);
  },
};

functionTypes.regularFunction('hello', 'world');

functionTypes.modernFunction('modern', 'approach');
