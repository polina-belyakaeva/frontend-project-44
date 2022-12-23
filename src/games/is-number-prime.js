import { greeting } from "../index.js";
import { getRandomNumber } from "../helper.js";
import readlineSync from "readline-sync";

export const isNumberPrime = () => {
  let newUserName = greeting();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let i = 1;
  while (i <= 3) {
    const randomNumber = getRandomNumber(1, 50);

    i += 1;

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question(`Your answer: `);
    userAnswer.toLowerCase();

    let result;
    let feedback;

    const checkNumberForPrime = (number) => {
      if (number === 1) {
        result = "no";
      } else if (number === 2) {
        result = "yes";
      } else {
        for (let i = 2; i < number; i += 1) {
          if (number % i === 0) {
            return (result = "no");
          }
        }
        result = "yes";
      }
      return result;
    };

    checkNumberForPrime(randomNumber);

    if (userAnswer === result) {
      feedback = "Correct!";
    } else {
      feedback = `Answer "${userAnswer}" is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${newUserName}!`;
      i = 1;
    }
    console.log(feedback);
  }
  console.log(`Congratulations, ${newUserName}!`);
};
