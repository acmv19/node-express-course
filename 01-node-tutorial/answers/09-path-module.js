/*built-in module*/
const path = require("path"); //provides a way of working with directories and file path
console.log(path.sep);
let filePpath = path.join("/content/", "subfolder", "test.txt");
console.log(filePpath);
const base = path.basename(filePpath);
console.log(base);
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute); //C:\Users\mava1\Desktop\anamaria\codethedream.giraffe\node-express-course\01-node-tutorial\answers\content\subfolder\test.txt
/*ANOTHER TEST*/
console.log("  ANOTHER TEST:  ");
const fullPath = path.join("answers", "08-os-module.js");
console.log(fullPath); //
const absolute2 = path.resolve(__dirname, "08-os-module.js"); //C:\Users\mava1\Desktop\anamaria\codethedream.giraffe\node-express-course\01-node-tutorial\answers\08-os-module.js
console.log(absolute2);
