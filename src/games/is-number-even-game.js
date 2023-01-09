import getRandomNumber from "../helper.js";
import runGame from "../index.js";

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => { 
const question = getRandomNumber(1, 50); 
const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';

return [question, correctAnswer]; 
};

export default () => { 
  runGame(description, getQuestionAndAnswer); 
};
