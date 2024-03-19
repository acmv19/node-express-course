const express = require("express");
const router = express.Router();
const { logOn, logOff, testAuth } = require("../controllers/auth.js");

router.post("/logOn", logOn);
router.delete("/lofOff", logOff);
router.get("/testAuth", testAuth);

module.exports = router;
