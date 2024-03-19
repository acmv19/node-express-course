const express = require("express");
const router = express.Router();
const {
  getPeople,
  addPeople,
  UpdatePerson,
  deletePerson,
  getPeopleByID,
} = require("../controllers/people.js");
const { people } = require("../data.js");

router.get("/", getPeople);

router.get("/:id", getPeopleByID);

router.post("/", addPeople);

router.put("/", UpdatePerson);

router.delete("/:id", deletePerson);

/*router.route('/').get(getPeople).post(addPeople);//otra forma
 */

module.exports = router;
