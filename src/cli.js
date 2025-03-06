import readlineSync from 'readline-sync';

export default function game() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('Please enter your name: ');
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
