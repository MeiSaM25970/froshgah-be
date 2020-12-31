const baseRepo = require("./base.repo");
const mongoDb = require("mongodb");

const mainDetail = {
  create: (mainDetail, next) => {
    baseRepo.connect((err, db) => {
      if (err) next(err);
      db.collection("mainDetail").insertOne(mainDetail, next);
    });
  },
  fetchAll: (next) => {
    baseRepo.connect((err, db) => {
      if (err) next(err);
      else {
        db.collection("mainDetail").find({}).toArray(next);
      }
    });
  },
  findById: (_id, next) => {
    baseRepo.connect((err, db) => {
      if (err) next(err);
      else {
        const objId = new mongoDb.ObjectID(_id);
        db.collection("mainDetail").findOne({ _id: objId }, next);
      }
    });
  },
  delete: (_id, next) => {
    baseRepo.connect((err, db) => {
      if (err) next(err);
      else {
        const objId = new mongoDb.ObjectID(_id);
        db.collection("mainDetail").deleteOne({ _id: objId }, next);
      }
    });
  },
  update: (_id, mainDetail, next) => {
    baseRepo.connect((err, db) => {
      if (err) next(err);
      else {
        const objId = new mongoDb.ObjectID(_id);
        db.collection("mainDetail").updateOne(
          { _id: objId },
          { $set: mainDetail },
          next
        );
      }
    });
  },
};
module.exports = mainDetail;
