import getRandomNumber from '../helper.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (number) => {
 if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 50);
  const correctAnswer = isNumberPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
