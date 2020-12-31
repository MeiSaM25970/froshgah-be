const express = require("express");
const router = express.Router();
const mainRoute = require("./main.routes");
const loginRoute = require("./login.routes");
const productsRoute = require("./products.routes");
const uploadImageRoutes = require("./upload.routes");
const authRoutes = require("./auth.routes");
const managePageARoutes = require("./managePageA.routes");
const checkoutRoutes = require("./checkout.routes");
const paymentRoutes = require("./payment.routes");
const orderRoutes = require("./orderDetail.routes");
const trackingRoutes = require("./tracking.routes");
const categoriesRoutes = require("./categories.routes");
const userInfoRoutes = require("./userInfo.routes");
const changePasswordRoutes = require("./changPassword.routes");
const aboutRoutes = require("./about.routes");
const contactRoutes = require("./contact.routes");
const weblogRoutes = require("./weblog.routes");
const commentsRoutes = require("./comments.routes");
const logMiddlewareRoutes = require("./counter.routes");
const mangePagesRoutes = require("./managePages.routes");

router.use("/", mainRoute);
router.use("/counter", logMiddlewareRoutes);
router.use("/login", loginRoute);
router.use("/products", productsRoute);
router.use("/upload", uploadImageRoutes);
router.use("/auth", authRoutes);
router.use("/manage-page-a", managePageARoutes);
router.use("/checkout", checkoutRoutes);
router.use("/payment", paymentRoutes);
router.use("/orderDetail", orderRoutes);
router.use("/tracking", trackingRoutes);
router.use("/categories", categoriesRoutes);
router.use("/userInfo", userInfoRoutes);
router.use("/changePassword", changePasswordRoutes);
router.use("/about", aboutRoutes);
router.use("/contact", contactRoutes);
router.use("/weblog", weblogRoutes);
router.use("/comments", commentsRoutes);
router.use("/managePages", mangePagesRoutes);

module.exports = router;
