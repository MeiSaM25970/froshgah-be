const fs = require("fs");
const path = require("path");

const logDirPath = path.resolve(__dirname, "../../logs");
const logFilePath = logDirPath.concat("/req.json");
const counterController = {
  fetch: (req, res) => {
    fs.readFile(logFilePath, (err, data) => {
      if (err) {
        if (err.code === "ENOENT") {
          data = "[]";
          try {
            fs.writeFileSync(logFilePath, data);
          } catch (e) {
            console.log(e);
          }
        } else {
          console.log(err);
        }
      }
      data = JSON.parse(data);
      res.send({ webVisit: data.length });
    });
  },
  create: (req, res) => {
    res.send({ msg: "ok" });
  },
};

module.exports = counterController;
