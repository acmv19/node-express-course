const { people } = require("./data");

/*const getPeople = (req, res) => {
  res.json(people);
};*/
const addPeople = (req, res) => {
  const name = req.body; // Extraer nombre del cuerpo de la solicitud
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide a name" });
  } else {
    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name });
  }
};

module.exports = { addPeople };
