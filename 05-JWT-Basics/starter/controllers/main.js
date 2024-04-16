const jwt = require("jsonwebtoken");
//const customAPIError = require("../errors/custom-error");
const { BadRequestError } = require("../errors");
const login = async (req, res) => {
  const { username, password } = req.body;
  // console.log("---- AQUIIII ---- ", req);
  //MONGO validation

  //Joi
  //check in the controlers:
  if (!username || !password) {
    //si el usuario no coloca email o password, enviara el error
    //throw new customAPIError("please provide email and password ", 400);
    throw new BadRequestError("please provide email and password ");
  }
  const id = new Date().getDate(); //demo. usually provided by DB
  // keep payload small, better experience for user
  //demo, in production use long, complex and unguessable string value

  console.log("env var here", process.env.JWT_SECRET);
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  console.log(" here token ", token);

  //console.log(username, password);
  //res.send("fake login/Register/Sigup Route");
  return res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  console.log(req.user);
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `hi, ${req.user.username}`,
    secret: `here is ypur authorized data, your lucky # is${luckyNumber}`,
  });
  //console.log(req.headers);
  /*const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new customAPIError("not token provided ", 401);
  }
  const token = authHeader.split(" ")[1];
  console.log(token);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
      msg: `hi, ${decoded.username}`,
      secret: `here is ypur authorized data, your lucky # is${luckyNumber}`,
    });
  } catch (error) {
    throw new customAPIError("not authorized to access this route ", 401);
  }*/

  /*const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `hi, Ana`,
    secret: `here is ypur authorized data, your lucky # is${luckyNumber}`,
  });*/
};

module.exports = { login, dashboard };
