const mainDetailRepo = require("../../../dal/manageMain.repo");

const mainDetailController = {
  create: (req, res) => {
    const mainDetail = req.body;
    if (!mainDetail) {
      res.status(400).send({ massage: "ورودی  وجود ندارد" });
    }
    mainDetailRepo.create(mainDetail, (err, result) => {
      if (err) res.status(500).send(err);
      else res.send(result);
    });
  },
  fetchAll: (req, res) => {
    mainDetailRepo.fetchAll((err, data) => {
      if (err) res.status(500).send(err);
      else res.send(data);
    });
  },
  findById: (req, res) => {
    const mainDetailId = req.params.id;
    mainDetailRepo.findById(mainDetailId, (err, data) => {
      if (err) res.status(500).json(err.message);
      else res.json(data);
    });
  },
  delete: (req, res) => {
    const mainDetailId = req.params.id;
    mainDetailRepo.delete(mainDetailId, (err, result) => {
      if (err) res.status(500).send(err);
      else res.send(result);
    });
  },
  update: (req, res) => {
    const newMainDetail = req.body;
    const mainDetailId = req.params.id;
    delete newMainDetail._id;
    mainDetailRepo.update(mainDetailId, newMainDetail, (err, result) => {
      if (err) res.status(500).send(err);
      else res.send(result);
    });
  },
};

module.exports = mainDetailController;
