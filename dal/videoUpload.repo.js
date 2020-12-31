const baseRepo = require("./base.repo");
const mongoDb = require("mongodb");

const uploadVideo = {
  create: (videoPath, next) => {
    baseRepo.connect((err, db) => {
      if (err) next(err);
      db.collection("uploadVideo").insertOne(videoPath, next);
    });
  },
  fetchAll: (next) => {
    baseRepo.connect((err, db) => {
      if (err) next(err);
      else {
        db.collection("uploadVideo").find({}).toArray(next);
      }
    });
  },

  delete: (_id, next) => {
    baseRepo.connect((err, db) => {
      if (err) next(err);
      else {
        const objId = new mongoDb.ObjectID(_id);
        db.collection("uploadVideo").deleteOne({ _id: objId }, next);
      }
    });
  },
};
module.exports = uploadVideo;
