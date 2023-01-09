import getRandomNumber from '../helper.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const checkGreatestCommonDivisor = (first, second) => {
  let result;

  if (first === second) {
    result = first;
  }

  while (first !== second) {
    if (first > second) {
      result = first - second;
    } else {
      result = second - first;
    }
  }

  return String(result);
};
const getQuestionAndAnswer = () => {

  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = checkGreatestCommonDivisor(firstNumber, secondNumber);

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
