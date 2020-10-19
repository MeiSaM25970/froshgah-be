const express = require("express");
const router = express.Router();
const productsController = require("../controller/products/index");

router.post("/", productsController.create);
router.get("/", productsController.fetchAll);
router.delete("/", productsController.delete);
router.put("/", productsController.update);

module.exports = router;
