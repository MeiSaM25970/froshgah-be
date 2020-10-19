const express = require("express");
const router = express.Router();
const imageSave = require("../controller/uploadImage/index");

router.post("/", imageSave);

module.exports = router;
