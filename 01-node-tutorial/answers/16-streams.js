const { createReadStream } = require("fs");

let counter = 0; // inicializando contador

const stream = createReadStream("../content/big.txt", {
  encoding: "utf8",
  highWaterMark: 200,
});

stream.on("data", (chunks) => {
  // handle data to stream
  counter++;
  console.log("data or chuck recived:", chunks);
});

stream.on("end", () => {
  console.log("total of data counted: ", counter);
});

stream.on("error", (error) => {
  console.log("ohh noo!....", error);
});
