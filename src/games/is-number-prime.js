import getRandomNumber from "../helper.js";
import runGame from "../index.js";

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (number) => {
  let result;

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

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 50);
  const correctAnswer = isNumberPrime(question);

  return [question, correctAnswer];
};

export default () => { 
  runGame(description, getQuestionAndAnswer); 
};
