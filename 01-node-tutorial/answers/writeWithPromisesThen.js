const { writeFile, readFile } = require("fs").promises;

writeFile("./temporary/temp.txt", "line one \n") // write line 1
  .then(() => {
    console.log("1, next\n");
    return writeFile("./temporary/temp.txt", "line two \n"); // write line 2.
    // Return the promise so you can chain the .then statements
  })
  .then(() => {
    console.log("Line 2, next\n");
    return writeFile("./temporary/temp.txt", "line three \n");
  })
  .then(() => {
    console.log("Line 3,...\n");
    return writeFile("./temporary/temp.txt", "final line ... \n");
  }) // write the third line, and follow that with two more .then blocks,
  // one to call readFile to read it back out, and one to log the data to the screen.
  .then(() => {
    console.log("line 3\n");
    console.log("three lines successfuly");
  })
  //data llam
  .then(() => {
    return readFile("./temporary/temp.txt", "utf8");
  })
  .then((data) => {
    //screen
    console.log("finalmente", data);
  })
  .catch((error) => {
    console.log("An error occurred: ", error);
  });
