#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game, { generateRandNum, calculateExpression } from '../src/cli.js';

const calcGame = () => {
  const name = game();

  const operations = ['+', '-', '*'];

  let sum = 0;
  console.log('What is the result of the expression?');

  while (sum < 3) {
    const num1 = generateRandNum(1, 15);
    const num2 = generateRandNum(1, 15);

    const operation = operations[Math.floor(Math.random() * operations.length)];

    console.log(`Question: ${num1} ${operation} ${num2}: `);
    const userAnswer = Number(readlineSync.question('Your answer is: '));
    const correctAnswer = Number(calculateExpression(num1, num2, operation));

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      sum += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

calcGame();
