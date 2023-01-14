#!/usr/bin/env node
import readlineSync from 'readline-sync';

const countRounds = 3;

const runGame = (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  const newUserName = userName.charAt(0).toUpperCase() + userName.slice(1);
  console.log(`Hello, ${newUserName}!`);

  console.log(description);

  for (let i = 0; i < countRounds; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('You answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${newUserName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${newUserName}!`);
};

export default runGame;
