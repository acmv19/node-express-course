const { CustomAPIError } = require("../errors/custom-error");
const { statusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  //return res.status(500).send('Something went wrong try again later')
  return res
    .status(err.statusCode)
    .send("Something went wrong try again later");
};

module.exports = errorHandlerMiddleware;
