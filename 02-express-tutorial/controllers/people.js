const { people } = require("../data.js");

const getPeople = (req, res) => {
  // res.json(people);
  res.status(200).json({ success: true, data: people });
};

const addPeople = (req, res) => {
  const { name } = req.body; // Extraer nombre del cuerpo de la solicitud
  if (!name) {
    //si no se ingresa name
    return res
      .status(400)
      .json({ success: false, message: "Please provide a name" });
  } else {
    people.push({ id: people.length + 1, name: name });
    res.status(201).json({ success: true, name: name });
  }
};
/*
const createPersonPostamn = (eq, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide a name" });
  }
  res.status(201).send({ success: true, data: [...people, name] });
};*/

const getPeopleByID = (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  } else {
    res.status(200).json({ success: true, data: person });
  }
};

const UpdatePerson = (req, res) => {
  //  const { id } = req.params;
  const { name } = req.body;
  const { id } = req.body;

  console.log("aqui req ", req);
  console.log("aqui namee-----", name);
  //console.log(id, name);
  //res.send("hello");
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  console.log("-----", newPeople);
  res.status(200).json({ success: true, data: newPeople });
};

const deletePerson = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res.status(404).json({
      success: false,
      msg: `no person with id ${req.params.id}`,
    });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  addPeople,
  UpdatePerson,
  deletePerson,
  getPeopleByID,
};
