import { greeting, getRandomNumber } from "../index.js";
import readlineSync from "readline-sync";

export const checkGreatestCommonDivisor = () => {
  let newUserName = greeting();
  console.log("Find the greatest common divisor of given numbers.");

  let i = 1;
  while (i <= 3) {
    i += 1;
    const firstNumber = getRandomNumber(1, 50);
    const secondNumber = getRandomNumber(1, 50);

    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const userAnswer = readlineSync.question(`Your answer: `);
    const newUserAnswer = Number(userAnswer);

    let result;
    const findGreatestCommonDivisor = (first, second) => {
      
      while (first !== second) {
        if (first > second) {
          first -= second;
          result = first;
        } else {
          second -= first;
          result = second;
        }
      }
      return result;
    };

    findGreatestCommonDivisor(firstNumber, secondNumber);

    if (newUserAnswer === result) {
      console.log(`Correct!`);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${newUserName}!`);
      i = 1;
    }
  }
  console.log(`Congratulations, ${newUserName}!`);
};
