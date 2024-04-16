const jwt = require("jsonwebtoken");

const logon = async (req, res) => {
  //ingresar usuario
  const { name, password } = req.body;

  if (!name || !password) {
    return res
      .status(400)
      .json({ msg: "please insert your usarname and password" });
  }

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return res.status(200).json({ msg: "user created", token });
};

const hello = async (req, res) => {
  try {
    // Obtener el nombre de usuario del objeto req.user
    const username = req.user.name;

    // Enviar un mensaje de bienvenida al usuario
    res.status(200).json({
      msg: `Hi, ${username}, I am learning Node.js with Express this week and focusing on JWT.`,
    });
  } catch (error) {
    console.error("Error getting username from req.user:", error);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = { logon, hello };
