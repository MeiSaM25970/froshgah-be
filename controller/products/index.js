const productRepo = require("../../dal/product.repo");
// const Product = require("../../models/product.model");

// Product.findById("ufwh923090").then((product) => res.send(product));

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
  fetchAll: (req, res) => {
    productRepo.fetchAll((err, data) => {
      if (err) res.status(500).send(err);
      else res.send(data);
    });
  },
  findById: (req, res) => {
    const productId = req.params.id;
    productRepo.findById(productId, (err, data) => {
      if (err) res.status(500).json(err.message);
      else res.json(data);
    });
  },
  delete: (req, res) => {
    const product = ({ _id, text } = req.body);
    productRepo.delete(product._id, (err, result) => {
      if (err) res.status(500).send(err);
      else res.send(result);
    });
  },
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
