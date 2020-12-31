const manageFooterRepo = require("../../../dal/manageFooter.repo");

const manageFooterController = {
  create: (req, res) => {
    const manageFooter = req.body;
    if (!manageFooter) {
      res.status(400).send({ massage: "ورودی  وجود ندارد" });
    }
    manageFooterRepo.create(manageFooter, (err, result) => {
      if (err) res.status(500).send(err);
      else res.send(result);
    });
  },
  fetchAll: (req, res) => {
    manageFooterRepo.fetchAll((err, data) => {
      if (err) res.status(500).send(err);
      else res.send(data);
    });
  },
  findById: (req, res) => {
    const manageFooterId = req.params.id;
    manageFooterRepo.findById(manageFooterId, (err, data) => {
      if (err) res.status(500).json(err.message);
      else res.json(data);
    });
  },
  delete: (req, res) => {
    const manageFooterId = req.params.id;
    manageFooterRepo.delete(manageFooterId, (err, result) => {
      if (err) res.status(500).send(err);
      else res.send(result);
    });
  },
  update: (req, res) => {
    const newManageFooter = req.body;
    const manageFooterId = req.params.id;
    delete newManageFooter._id;
    manageFooterRepo.update(manageFooterId, newManageFooter, (err, result) => {
      if (err) res.status(500).send(err);
      else res.send(result);
    });
  },
};

module.exports = manageFooterController;
