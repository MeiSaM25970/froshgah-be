const path = require("path");

const MainController = {
  get: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../public/index.html"));
  },
};
module.exports = MainController;
