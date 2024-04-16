const customAPIError = require("./custom-error");
const BadRequestError = require("./bad-request");
const unauthenticatedError = require("./unauthenticated");

module.exports = { customAPIError, BadRequestError, unauthenticatedError };
