const jwt = require("jsonwebtoken");

const authenticationMiddleware = async (req, res, next) => {
  const authenticationHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ msg: "not token provided " });
  }

  const token = authenticationHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    res.status(401).json({ msg: "not authorized :S " });
  }
};

module.exports = authenticationMiddleware;
