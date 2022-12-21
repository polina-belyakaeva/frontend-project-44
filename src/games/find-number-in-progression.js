import { greeting } from "../index.js";
import { getRandomNumber } from "../helper.js";
import readlineSync from "readline-sync";

export const findNumberInProgression = () => {
  let newUserName = greeting();

  console.log("What number is missing in the progression?");

  let i = 1;
  while (i <= 3) {
    const randomArr = [];

    let newNumberInProgression = getRandomNumber(1, 5);
    const progressionStep = getRandomNumber(2, 5);

    while (randomArr.length <= 9) {
      randomArr.push(newNumberInProgression.toString());
      newNumberInProgression += progressionStep;
    }

    const randomElement = Math.floor(Math.random() * randomArr.length);
    const rightAnswer = randomArr[randomElement];
    randomArr[randomElement] = "..";

    i += 1;

    console.log(`Question: ${randomArr.toString().split(",").join(" ")}`);
    const userAnswer = readlineSync.question(`Your answer: `);

    let feedback;

    if (userAnswer === rightAnswer) {
      feedback = "Correct!";
    } else {
      feedback = `Answer "${userAnswer}" is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${newUserName}!`;
      i = 1;
    }
    console.log(feedback);
  }

  console.log(`Congratulations, ${newUserName}!`);
};
