#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game from '../src/cli.js';

const name = game();

console.log('What is the result of the expression?');
const operations = ['+', '-', '*'];

// const generateExpression = () => {
//   const getRandomInt1 = () => Math.floor(Math.random() * 50) + 1;
//   const getRandomInt2 = () => Math.floor(Math.random() * 50) + 1;

//   const operation = operations[Math.floor(Math.random() * operations.length)];
//   return operation;
// };

// const calculateExpression = (num1, num2, operation) => {
//   switch (operation) {
//     case '+':
//       return num1 + num2;
//     case '-':
//       return num1 - num2;
//     case '*':
//       return num1 * num2;
//     default:
//       return null;
//   }
// };
// let sum = 0;

// const calcGame = () => {
//   do {
//     const { num1, num2, operation } = generateExpression();
//     const correctAnswer = calculateExpression(num1, num2, operation);
//     const expression = `${num1} ${num2} ${operation}`;
//     console.log(`Question is: ${expression}`);
//     readlineSync.question('Your answer is: ');
//   } while (sum < 3);
// };
// calcGame();

function generateExpression(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const calculateExpression = {
  '+': function (x, y) { return x + y },
  '-': function (x, y) { return x - y },
  '*': function (x, y) { return x * y }
}
