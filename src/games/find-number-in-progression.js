import getRandomNumber from '../helper.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (step, startNumber, lengthProgression) => {
  const randomProgression = [];
  let newNumber = startNumber;
  while (randomProgression.length <= lengthProgression) {
    randomProgression.push(newNumber.toString());
    newNumber += step;
  }
  return randomProgression;
};

const getQuestionAndAnswer = () => {
  const progression = getProgression(getRandomNumber(2, 10), getRandomNumber(3, 9), 9);
  const randomElement = Math.floor(Math.random() * progression.length);
  const correctAnswer = progression[randomElement];
  progression[randomElement] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
