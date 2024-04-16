const CustomAPIError = require("./custom-error");
const { statusCodes } = require("http-status-codes");
class unauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    //this.statusCode = 401;
    this.statusCode = statusCodes.ANAUTHPRIZED;
  }
}

module.exports = unauthenticatedError;
