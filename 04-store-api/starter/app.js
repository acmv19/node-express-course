//console.log('04 Store API')
require("dotenv").config();
//async errors
require("express-async-errors");

const express = require("express");
const app = express();

const connecDB = require("./db/connect");
const productsRouter = require("./routes/products");

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

//middleware. (not in this proyect. just don't forget syntax)
app.use(express.json());

//routes

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products"> products route</a>');
});

app.use("/api/v1/products", productsRouter);

//products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //connecDB
    await connecDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listining a port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
