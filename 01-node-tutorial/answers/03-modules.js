/*MODULES*/ //encapsulated code (only share minimun). every file is a module(by default)
const names = require("./04-names"); //call
const hi = require("./05-utils");
const dataMusic = require("./06-alternative-flavor");
const dataMusic2 = require("./07-mind-grenade");
console.log(names);
hi(names.mySisterName);
hi(names.myPerson.name);

console.log("my data of my favorite music is:", dataMusic);

console.log(`my favorite sigers are ${dataMusic.favSingers}`);
console.log(`my 2do favorite song of adele is ${dataMusic.favMusic[0].title2}`);

//dataMusic2.printSongs();
