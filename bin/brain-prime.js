#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game, { checkAnswer, generateRandNum, isPrime } from '../src/cli.js';

const primeGame = () => {
  const name = game();
  let sum = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

  while (sum < 3) {
    const num = generateRandNum(1, 10);

    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer is: ').toLowerCase();
    const correctAnswer = isPrime(num) ? 'yes' : 'no';

    if (checkAnswer(Number(userAnswer), correctAnswer, name)) {
      sum += 1;
    } else {
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

primeGame();
