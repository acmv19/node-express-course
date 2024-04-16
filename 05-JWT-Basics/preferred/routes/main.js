const express = require("express");
const router = express.Router();

const { login, dashboard, hello, logon } = require("../controllers/main");
const authenticationMiddleware = require("../middleware/main");
router.route("/hello").get(hello, authenticationMiddleware);
router.route("/logon").post(logon);

module.exports = router;
