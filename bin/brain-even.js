import readlineSync from 'readline-sync';
import game from '../src/cli.js';

const name = game();
let sum = 0;

do {
  const getRandomInt = () => Math.floor(Math.random() * 100) + 1;
  const isEven = (num) => num % 2 === 0;
  const getRandomNum = getRandomInt();

  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  console.log(`Question: ${getRandomNum}`);

  const correctAnswer = isEven(getRandomNum) ? 'yes' : 'no';
  const firstAnswer = (readlineSync.question('Your answer is: '));
  if (firstAnswer.toLowerCase() === correctAnswer) {
    sum += 1;
    console.log('Correct!');
  } else {
    sum = 0;
    console.log(`${firstAnswer} is wrong answer ;(.`);
    console.log(`Let's try again, ${name}`);
  }
} while (sum < 3);

if (sum === 3) {
  console.log(`Congratulations, ${name}`);
}
