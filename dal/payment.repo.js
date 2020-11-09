const baseRepo = require("./base.repo");
const mongoDb = require("mongodb");

const repo = {
  create: (paymentLog, next) => {
    baseRepo.connect((err, db) => {
      if (err) next(err);
      else {
        db.collection("paymentLog").insertOne(paymentLog, next);
      }
    });
  },
  findByAuthority: (authority, next) => {
    baseRepo.connect((err, db) => {
      if (err) next(err);
      else {
        db.collection("paymentLog").findOne({ authority: authority }, next);
      }
    });
  },
  update: (_id, payment, next) => {
    baseRepo.connect((err, db) => {
      if (err) next(err);
      else {
        const objId = new mongoDb.ObjectID(_id);
        db.collection("paymentLog").updateOne(
          { _id: objId },
          { $set: payment },
          next
        );
      }
    });
  },
};

module.exports = repo;
