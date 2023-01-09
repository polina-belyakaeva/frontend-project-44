import getRandomNumber from '../helper.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';

const calculateMathExpression = (firstNumber, secondNumber, operator) => {
  let result;

  if (operator === '+') {
    result = firstNumber + secondNumber;
  } else if (operator === '-') {
    result = firstNumber - secondNumber;
  } else if (operator === '*') {
    result = firstNumber * secondNumber;
  }

  return String(result);
};

const getQuestionAndAnswer = () => {
  const operators = ['+', '-', '*'];
  const operatorSelector = Math.floor(Math.random() * operators.length);
  const operator = operators[operatorSelector];

  const firstNumber = getRandomNumber(1, 6);
  const secondNumber = getRandomNumber(1, 10);

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = calculateMathExpression(firstNumber, secondNumber, operator);

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
