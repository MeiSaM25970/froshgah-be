const express = require("express");
const router = express.Router();
const checkoutController = require("../controller/payment");

router.get("/verify", checkoutController.verify);

module.exports = router;
