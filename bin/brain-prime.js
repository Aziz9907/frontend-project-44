#!/usr/bin/env node
import readlineSync from "readline-sync";
import game, { checkAnswer, generateRandNum } from "../src/cli.js";

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }
  return true;
}

const primeGame = () => {
  const name = game();
  let sum = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

  while (sum < 3) {
    const num = generateRandNum(1, 10);

    console.log(`Question is: ${num}`);
    const userAnswer = readlineSync.question("Your answer is: ").toLowerCase();
    const correctAnswer = isPrime(num) ? "yes" : "no";
    checkAnswer(userAnswer, correctAnswer, sum, name);
  }

  console.log(`Congratulations, ${name}`);
};

primeGame();
