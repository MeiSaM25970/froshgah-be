const express = require("express");
const router = express.Router();
const mainRoute = require("./main.routes");
const loginRoute = require("./login.routes");
const productsRoute = require("./products.routes");
const uploadImage = require("./upload.routes");
const authRoutes = require("./auth.routes");
const managePageARoutes = require("./managePageA.routes");
const checkoutRoutes = require("./checkout.routes");
const paymentRoutes = require("./payment.routes");

router.use("/", mainRoute);
router.use("/login", loginRoute);
router.use("/products", productsRoute);
router.use("/upload", uploadImage), (module.exports = router);
router.use("/auth", authRoutes);
router.use("/manage-page-a", managePageARoutes);
router.use("/checkout", checkoutRoutes);
router.use("/payment", paymentRoutes);
