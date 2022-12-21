import { greeting } from "../index.js";
import { getRandomNumber } from "../helper.js";
import readlineSync from "readline-sync";

export const isNumberEven = () => {
  let newUserName = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 1;
  while (i <= 3) {
    const randomNumber = getRandomNumber(1, 50);

    i += 1;

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question(`Your answer: `);
    userAnswer.toLowerCase();

    let result;
    let feedback;

    if (randomNumber % 2 === 0) {
      result = "yes";
    } else {
      result = "no";
    }

    if (userAnswer === result) {
      feedback = "Correct!";
    } else {
      feedback = `Answer "${newUserName}" is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${newUserName}!`;
      i = 1;
    }
    console.log(feedback);
  }

  console.log(`Congratulations, ${newUserName}!`);
};
