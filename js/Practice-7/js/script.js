// Завдання 1

// const hello1 = function(a) {
//     return a;
// };

// const result = hello1('Привіт JavaScript');
// console.log(result);

// Завдання 2
// const hello2 = function(a, b) {
//   return a + b;
// };
// console.log(hello2('Привіт, ', 'Василь'));

// Завдання 3

// const mul = function(n, m) {
//   console.log(n+m)
//   console.log(n-m)
//   console.log(n*m)
// };

// mul(2, 2);

// Завдання 4

// const myNewArrowFunction = (...rest) => {
//   console.log(rest);
// };
// myNewArrowFunction(1, 2, 3);
// myNewArrowFunction(100, 200, 300, 400, 500);
// myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

// Завдання 5

// const myAverageScore = function (...args) {
// let total = 0;
// for (const arges of args) {
//   total += arges;
// }
// total = total/args.length;
// if (total >= 91 && total <= 100) {
//     console.log("Your average score: A");
// } else if (total >= 81 && total <= 90) {
//     console.log("Your average score: B");
// } else if (total >= 71 && total <= 80) {
//     console.log("Your average score: C");
// } else if (total <= 70) {
//     console.log("Your average score: D");
// }

// }

// myAverageScore(100, 75, 81, 96);
// myAverageScore(45, 63, 85, 70);
// myAverageScore(77, 82, 60, 58);
// myAverageScore(93, 99, 93, 96);