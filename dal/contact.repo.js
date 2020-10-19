const baseRepo = require("./base.repo");

const repo = {
  create: (contact, next) => {
    baseRepo.connect((err, db) => {
      if (err) next(err);
      else {
        db.collection("contact").insertOne(contact, next);
      }
    });
  },
};

module.exports = repo;
