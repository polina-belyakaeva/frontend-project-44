#!/usr/bin/env node
import readlineSync from "readline-sync";

let newUserName;

export const greeting = () => {
  console.log("Welcome to the Brain Games!");

  let userName = readlineSync.question("May I have your name? ");
  newUserName = userName.charAt(0).toUpperCase() + userName.slice(1);
  console.log("Hello, " + newUserName + "!");

  return newUserName;
};

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
