const express = require("express");
const router = express.Router();
const expressJWT = require("express-jwt");
const controller = require("../controller/user");

const authMiddleware = () =>
  expressJWT({
    secret: "JUWEURfdryd65&^@$$&&*r-==-rs",
    credentialsRequired: true,
    algorithms: ["sha1", "RS256", "HS256"],
  });

router.post("/login", controller.login);
router.post("/register", authMiddleware(), controller.register);

module.exports = router;
