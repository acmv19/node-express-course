const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
  // writeFile
  try {
    const one = "line one";
    const two = "line two";
    const three = "line three";

    await writeFile(
      "./temporary/temp.txt",
      `creating lines: \n${one}\n${two}\n${three}\n`,
      { flag: "a" }
    ); //write 3 lines to temp.txt.esperando promise sea resolve

    console.log("file written successfully :)\n", one, "\n", two, "\n", three);
  } catch (error) {
    console.log("???....", error); //if error happen
  }
};

//Create another async func. file with await readFile and logs the return value to the screen.

const reader = async () => {
  //readFile
  try {
    const data = await readFile("./temporary/temp.txt", "utf8"); // reading the inf.
    console.log("hey here is the information...\n", data);
  } catch (error) {
    console.log("ohh noo!!....", error);
  }
};

//write a third async function called readWrite. para llamar las funciones write y read pero hay que hacerlo con async.
//ambas son async y no sabemos en que orden apareceran OJO

const readWrite = async () => {
  writer();
  reader();
};
readWrite(); //calling func.
