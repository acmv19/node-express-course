const jwt = require("jsonwebtoken");
//const customAPIError = require("../errors/custom-error");
const { unauthenticadeError } = require("../errors");
const authenticationMiddleware = async (req, res, next) => {
  //console.log(req.headers.authorization);
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    //throw new customAPIError("not token provided ", 401);
    throw new unauthenticadeError("not token provided ");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    //throw new customAPIError("not authorized to access this route ", 401);
    throw new unauthenticadeError("not authorized to access this route ");
  }
};

module.exports = authenticationMiddleware;
