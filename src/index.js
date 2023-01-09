#!/usr/bin/env node
import readlineSync from "readline-sync";

const runGame = (description, getQuestionAndAnswer) => {
  console.log("Welcome to the Brain Games!");

  let userName = readlineSync.question("May I have your name? ");
  let newUserName = userName.charAt(0).toUpperCase() + userName.slice(1);
  console.log(`Hello, ${newUserName}!`);

  console.log(description);

  let countRounds = 3;
  for (let i = 1; i <= countRounds; i += 1) { 
  const [question, correctAnswer] = getQuestionAndAnswer(); 
  console.log(`Question: ${question}`); 

  const userAnswer = readlineSync.question('You answer: ');
  const newUserAnswer = userAnswer.toLowerCase();

  if (correctAnswer === newUserAnswer) {
    console.log('Correct!'); 
  } else {
    console.log(`'${newUserAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${newUserName}!`);
    i = 0;
  };
};
  console.log(`Congratulations, ${newUserName}!`); 
};

export default runGame;
