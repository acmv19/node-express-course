const { readFileSync, writeFileSync } = require("fs");
const fileA = readFileSync("./temporary/fileA.tx", "utf8");
const fileB = readFileSync("./temporary/fileB.tx", "utf8");
console.log(fileA);
console.log(fileB);

writeFileSync(
  "./temporary/resp-sync.tx",
  `\n TESTING OUT MY RESP: \n ${fileA}\n ${fileB}`,
  { flag: "a" }
);
console.log("star");
console.log("next");
