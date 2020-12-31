const express = require("express");
const router = express.Router();
const expressJWT = require("express-jwt");
const manageFooterController = require("../controller/manages/footer");
const manageMainController = require("../controller/manages/main");
const videoController = require("../controller/manages/uploadVideo");
const videoUploadController = require("../controller/manages/uploadVideo");
const authMiddleware = () =>
  expressJWT({
    secret: "JUWEURfdryd65&^@$$&&*r-==-rs",
    credentialsRequired: true,
    algorithms: ["sha1", "RS256", "HS256"],
  });

router.get("/main", manageMainController.fetchAll);
router.post("/main", authMiddleware(), manageMainController.create);
router.post("/main/:id", authMiddleware(), manageMainController.update);
router.get("/footer", manageFooterController.fetchAll);
router.post("/footer", authMiddleware(), manageFooterController.create);
router.post("/footer/:id", authMiddleware(), manageFooterController.update);
router.post("/video", authMiddleware(), videoUploadController.upload);
router.delete(
  "/video/:videoName",
  authMiddleware(),
  videoUploadController.delete
);
router.get("/video", videoController.fetchAll);
module.exports = router;
