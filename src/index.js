import readlineSync from 'readline-sync';

const roundsCount = 3;

const startGameEngine = (gameDescription, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, rightAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toLowerCase() === rightAnswer.toLowerCase()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGameEngine;
