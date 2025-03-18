import readlineSync from 'readline-sync';

export default function game() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export const calculateExpression = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

export function generateRandNum(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function gcd(num1, num2) {
  return num2 === 0 ? num1 : gcd(num2, num1 % num2);
}

export function generateProgression() {
  const arr = [];

  const length = generateRandNum(5, 10);
  const num1 = generateRandNum(1, 10);
  const steps = generateRandNum(1, 5);
  for (let i = 0; i < length; i += 1) {
    arr.push(num1 + i * steps);
  }
  const hiddenIndex = Math.floor(Math.random() * length);
  const hiddenElement = arr[hiddenIndex];
  arr[hiddenIndex] = '..';
  return {
    progression: arr.join(' '),
    hiddenElement,
  };
}

export function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    return true;
  }
  return false;
}
