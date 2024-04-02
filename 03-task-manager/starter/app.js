console.log("Task Manager App");

const Express = require("express");
const app = Express();
const task = require("./routers/task");

const connectDB = require("./db/connect");

require("dotenv").config();

const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//middleware
app.use(Express.static("./public"));
app.use(Express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("task manager app");
});

app.use("/api/v1/task", task);

app.use(notFound);
app.use(errorHandlerMiddleware);

//const port = 3002;
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_Url);
    app.listen(port, console.log(`server is listening port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();

//app.listen(port, console.log(`server is listening port ${port}`));
