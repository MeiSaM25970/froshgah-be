const express = require("express");
const router = express.Router();
const categoriesController = require("../controller/categories");

router.get("/", categoriesController.fetchAll);
router.get("/:id", categoriesController.findById);
router.post("/", categoriesController.create);
router.put("/:id", categoriesController.update);
router.delete("/:id", categoriesController.delete);

module.exports = router;
