import readlineSync from 'readline-sync';

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('Please enter your name: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const runNum = getRandomInt(1, 10);
  const firstQuestion = (`Question: ${runNum}`);
  console.log(firstQuestion);
  const firstAnswer = (readlineSync.question('Your answer is: '));
  if (firstQuestion % 2 === 0 && firstAnswer === 'yes') {
    console.log(`${firstAnswer} is wrong answer ;(. Correct answer was 'no'.`);
    console.log(`Let's try again, ${name}!`);
  }
};

export default game;
