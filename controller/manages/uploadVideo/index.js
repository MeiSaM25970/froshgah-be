const fs = require("fs");
const fileDir = "./public/uploads/video/";
const uid = require("uid");
const uploadVideoRepo = require("../../../dal/videoUpload.repo");
const videoController = {
  upload: (req, res) => {
    if (!req.files || req.body.length === 0) {
      return res.status(400).send("فایلی ارسال نشد.");
    }
    let sampleFile = req.files.myFile;
    const randomNumber = uid.uid(25);
    const filepath = "uploads/video/"
      .concat(randomNumber)
      .concat(req.files.myFile.name);
    sampleFile.mv(__dirname + "../../../../public/" + filepath, (err) => {
      if (err) return res.status(500).send(err);
      uploadVideoRepo.create({ videoPath: filepath }, (err) => {
        if (err) res.status(500).send(err);
        else res.end();
      });
    });
  },

  delete: (req, res) => {
    const videoPath = req.params.videoName;
    const videoId = req.query.id;
    fs.unlink(fileDir + videoPath, (err) => {
      if (err) res.status(500).send(err);
      else {
        uploadVideoRepo.delete(videoId, (err, result) => {
          if (err) res.status(500).send(err);
          else res.send(result);
        });
      }
    });
  },
  fetchAll: (req, res) => {
    uploadVideoRepo.fetchAll((err, data) => {
      if (err) res.status(500).send(err);
      else res.send(data);
    });
  },
};
module.exports = videoController;
