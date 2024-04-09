require("dotenv").config();

const connecDB = require("./db/connect");
const product = require("./models/product");

const jsonProducts = require("./products.json"); //data stored

const start = async () => {
  try {
    await connecDB(process.env.MONGO_URI);
    await product.deleteMany();
    await product.create(jsonProducts);
    console.log("success!!");
    process.exit(0); //everything is ok//es para salir del procesp...mirar terminal
  } catch (error) {
    console.log(error);
    process.exit(1); //is not ok
  }
};

start();
