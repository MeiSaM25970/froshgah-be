const express = require("express");
const router = express.Router();
const mainRoute = require("./main.routes");
const loginRoute = require("./login.routes");
const productsRoute = require("./products.routes");
const uploadImage = require("./upload.routes");
const authRoutes = require("./auth.routes");

router.use("/", mainRoute);
router.use("/login", loginRoute);
router.use("/products", productsRoute);
router.use("/upload", uploadImage), (module.exports = router);
router.use("/auth", authRoutes);
