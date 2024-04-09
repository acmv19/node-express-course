const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    /* useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,*/
  });
};

module.exports = connectDB;

/*Cause of the Mongoose error
The error was caused by  the mongoose.connect() method - { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }.
Since Mongoose v6 these are the default values for the connection options and should be removed. The below message is from the Mongoose docs:
useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer supported options. 
Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, and useCreateIndex are true, and useFindAndModify is false.
 Please remove these options from your code.*/
