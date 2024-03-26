console.log("Task Manager App");

const Express = require("express");
const app = Express();
const task = require("./routers/task");

const connectDB = require("./db/connect");

require("dotenv").config();

//middleware
app.use(Express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("task manager app");
});

app.use("/api/v1/task", task);

const port = 3002;

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
