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

    if (checkAnswer(Number(userAnswer), correctAnswer, name)) {
      sum += 1;
    } else {
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

progressionGame();
