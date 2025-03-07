#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game from '../src/cli.js';

const isEvenGame = () => {
  const name = game();

  let sum = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  while (sum < 3) {
    const getRandomInt = () => Math.floor(Math.random() * 100) + 1;
    const isEven = (num) => num % 2 === 0;
    const getRandomNum = getRandomInt();

    console.log(`Question: ${getRandomNum}`);

    const correctAnswer = isEven(getRandomNum) ? 'yes' : 'no';
    const firstAnswer = readlineSync.question('Your answer is: ').toLowerCase();

    if (firstAnswer === correctAnswer) {
      sum += 1;
      console.log('Correct!');
    } else {
      console.log(
        `${firstAnswer} is wrong answer ;(. Correct answer is ${correctAnswer}`,
      );
      console.log(`Let's try again, ${name}`);
      return;
    }
  }

  console.log(`Congratulations, ${name}`);
};

isEvenGame();
