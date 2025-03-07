#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game, { generateRandNum, isPrime } from '../src/cli.js';

const gamePrime = () => {
  const name = game();
  let sum = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

  while (sum < 3) {
    const num = generateRandNum(1, 10);
    console.log(`Question is: ${num}`);
    const userAnswer = readlineSync.question('Your answer is: ').toLowerCase();
    const correctAnswer = isPrime(num) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      sum += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }

  console.log(`Congratulations, ${name}`);
};
gamePrime();
