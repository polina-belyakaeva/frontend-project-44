import readlineSync from 'readline-sync';

const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  const newUserName = userName.charAt(0).toUpperCase() + userName.slice(1);
  console.log(`'Hello, ${newUserName}!'`);
  return newUserName;
};

export default greeting;
