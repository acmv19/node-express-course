//callbacks
/*const { readFile, writeFile } = require("fs");

console.log("inicio");

readFile("./temporary/fileAa.tx", "utf8", (err, cont) => {
  if (err) {
    throw err; // console.log("hey!!ERROR");
  } else {
    console.log(cont);
  }
  console.log("MESSAGE......");
});*/

const { writeFile } = require("fs");

console.log("at start");
writeFile("./temporary/output.txt", "This is line 1\n", (err, result) => {
  console.log("LINE 1");
  if (err) {
    console.log("This error happened: ", err);
  } else {
    //here i write my next line
    // Write line 2
    writeFile(
      "./temporary/output.txt",
      "This is line 2\n",
      { flag: "a" },
      (err, result) => {
        console.log("LINE 2");
        if (err) {
          console.log("This error happened: ", err);
        } else {
          // Write line 3
          writeFile(
            "./temporary/output.txt",
            "This is line 3\n",
            { flag: "a" },
            (err, result) => {
              console.log("LINE 3");
              if (err) {
                console.log("This error happened: ", err);
              } else {
                console.log("All lines have been written successfully!");
              }
            }
          );
        }
      }
    );
  }
});

console.log("at end");
