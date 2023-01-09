import getRandomNumber from "../helper.js";
import runGame from "../index.js";

const description = 'What number is missing in the progression?'

const getQuestionAndAnswer = () => {
    const randomArr = [];

    let newNumberInProgression = getRandomNumber(1, 5);
    const progressionStep = getRandomNumber(2, 5);

    while (randomArr.length <= 9) {
      randomArr.push(newNumberInProgression.toString());
      newNumberInProgression += progressionStep;
    }

    const randomElement = Math.floor(Math.random() * randomArr.length);
    const correctAnswer = randomArr[randomElement];
    randomArr[randomElement] = "..";

    const question = `${randomArr.toString().split(",").join(" ")}`;

    return [question, correctAnswer]; 
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};

