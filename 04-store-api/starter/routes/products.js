const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getAllProductsStatic,
} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/static");
router.get("/static", getAllProductsStatic); // Separately. For some reason, if I do it together, there's an error

module.exports = router;
