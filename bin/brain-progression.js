#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game, { generateRandNum } from '../src/cli.js';

const name = game();

const arr = [];
function progressionGame() {
  const length = generateRandNum(5, 10);
  const num1 = generateRandNum();
  const steps = generateRandNum();
  for (let i = 0; i < length; i += 1) {
    arr.push(num1 + steps + i);
  }
  console.log(arr.join(' '));
}

progressionGame();
