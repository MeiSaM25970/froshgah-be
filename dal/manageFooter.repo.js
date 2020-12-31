const baseRepo = require("./base.repo");
const mongoDb = require("mongodb");

const footerDetail = {
  create: (footerDetail, next) => {
    baseRepo.connect((err, db) => {
      if (err) next(err);
      db.collection("footerDetail").insertOne(footerDetail, next);
    });
  },
  fetchAll: (next) => {
    baseRepo.connect((err, db) => {
      if (err) next(err);
      else {
        db.collection("footerDetail").find({}).toArray(next);
      }
    });
  },
  findById: (_id, next) => {
    baseRepo.connect((err, db) => {
      if (err) next(err);
      else {
        const objId = new mongoDb.ObjectID(_id);
        db.collection("footerDetail").findOne({ _id: objId }, next);
      }
    });
  },
  delete: (_id, next) => {
    baseRepo.connect((err, db) => {
      if (err) next(err);
      else {
        const objId = new mongoDb.ObjectID(_id);
        db.collection("footerDetail").deleteOne({ _id: objId }, next);
      }
    });
  },
  update: (_id, footerDetail, next) => {
    baseRepo.connect((err, db) => {
      if (err) next(err);
      else {
        const objId = new mongoDb.ObjectID(_id);
        db.collection("footerDetail").updateOne(
          { _id: objId },
          { $set: footerDetail },
          next
        );
      }
    });
  },
};
module.exports = footerDetail;
