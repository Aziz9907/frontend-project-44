#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game, { checkAnswer, generateProgression } from '../src/cli.js';

const progressionGame = () => {
  const name = game();

  let sum = 0;

  console.log('What number is missing in the progression?');

  while (sum < 3) {
    const gameProgress = generateProgression();
    console.log(`Question: ${gameProgress.progression}`);
    const userAnswer = Number(readlineSync.question('Your answer is: '));
    const correctAnswer = gameProgress.hiddenElement;
    if (checkAnswer(userAnswer, correctAnswer) === true) {
      sum += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

progressionGame();
