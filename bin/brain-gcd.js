#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game, { generateRandNum, gcd, checkAnswer } from '../src/cli.js';

const gcdGame = () => {
  const name = game();
  let sum = 0;
  console.log('Find the greatest common divisor of given numbers.');

  while (sum < 3) {
    const num1 = generateRandNum(1, 10);
    const num2 = generateRandNum(1, 10);

    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = Number(readlineSync.question('Your answer is: '));
    const correctAnswer = Number(gcd(num1, num2));

    if (checkAnswer(Number(userAnswer), correctAnswer, name)) {
      sum += 1;
    } else {
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

gcdGame();
