import readlineSync from 'readline-sync';

const greeting = () => {
  let userName = readlineSync.question('May I have your name? ');
  let newUserName = userName.charAt(0).toUpperCase() + userName.slice(1);
  console.log('Hello, ' + newUserName + '!');
  return newUserName;
};

export default greeting;
