/*built-in module*/

const os = require("os"); //Get information about the computer's operating system

//inf current user.
const user = os.userInfo();
console.log(user);

console.log(`system uptime is ${os.uptime()} sg`); //method returns system uptime in sg

console.log(
  `my plataform is: ${os.platform()}` + `. and my Architecture is: ${os.arch()}`
);

const otherInf = {
  release: os.release(), //Returns inf about operating system's release
  memory: os.totalmem(), //number of total memory of the system
  type: os.type(), //name of the operating system
};

console.log(`other information about system:`, otherInf);
