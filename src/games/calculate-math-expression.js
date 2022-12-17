import { greeting } from "../index.js";
import readlineSync from 'readline-sync';
import { getRandomNumber } from "../index.js";

let newUserName = greeting();

export const calculateMathExpression = () => {
    const operators = ["+", "-", "*"];
  
    let i = 1;
    while (i <= 3) {
      i += 1;
      const operatorSelector = Math.floor(Math.random() * operators.length);
      const operator = operators[operatorSelector];
  
      let firstNumber = getRandomNumber(1, 6);
      let secondNumber = getRandomNumber(1, 10);
  
      const mathExpression = `${firstNumber} ${operator} ${secondNumber}`;
  
      console.log(`Question: ${mathExpression}`);
      const userAnswer = readlineSync.question(`Your answer: `);
      const newUserAnswer = Number(userAnswer);
  
      let result;
  
      if (operator === "+") {
        result = firstNumber + secondNumber;
      } else if (operator === "-") {
        result = firstNumber - secondNumber;
      } else if (operator === "*") {
        result = firstNumber * secondNumber;
      }
  
      if (newUserAnswer === result) {
        console.log(`Correct!`);
      } else {
        console.log(
          `'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${newUserName}!`
        );
        i = 1;
      }
    }
  
    console.log(`Congratulations, ${newUserName}!`);
  };