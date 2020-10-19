const productRepo = require("../../dal/product.repo");
const productsController = {
  create: (req, res) => {
    const product = req.body;
    if (!product) {
      res.status(400).send({ massage: "محصول را وارد کنید" });
    }
    productRepo.create(product, (err, result) => {
      if (err) res.status(500).send(err);
      else res.send(result);
    });
    console.log(product);
  },
  //fetch all todos
  fetchAll: (req, res) => {
    productRepo.fetchAll((err, data) => {
      if (err) res.status(500).send(err);
      else res.send(data);
    });
  },
  //delete todo
  delete: (req, res) => {
    const product = ({ _id, text } = req.body);
    //read todos file
    productRepo.delete(product._id, (err, result) => {
      if (err) res.status(500).send(err);
      else res.send(result);
    });
  },
  //update todo
  update: (req, res) => {
    const product = ({ _id, text, isDone } = req.body);
    productRepo.update(
      todo._id,
      { text: product.text, isDone: product.isDone },
      (err, result) => {
        if (err) res.status(500).send(err);
        else res.send(result);
      }
    );
  },
};

module.exports = productsController;
