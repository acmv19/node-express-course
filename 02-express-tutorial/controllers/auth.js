const auth = require("../auth");

const logOn = (req, res) => {
  const { name } = req.body;
  if (name) {
    res
      .cooke("name", req.body.name)
      .status(201)
      .json({ message: `hi ${name} :D ` });
  } else {
    res.status(400).json({ message: "therenis not a name :C " });
  }
};

const logOff = (req, res) => {
  res.clearCookie("name").status(200).json({ message: "you are log off :s" });
};

const testAuth = (req, res) => {
  res.status(200).json({ message: `Welcome, ${req.user}!` });
};
module.exports = { logOn, logOff, testAuth };
