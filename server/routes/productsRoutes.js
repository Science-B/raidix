const express = require("express");
const router = express.Router({
  mergeParams: true,
});

const {
  getProducts,
  getProduct,
  addProduct,
  removeProduct,
  updateProduct,
} = require("../controllers/products.controller");
router
  .route("/")
  .get(async (req, res) => {
    try {
      const products = await getProducts();
      res.send(products);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка, попробуйте позже",
      });
    }
  })
  .post(async (req, res) => {
    try {
      const newProduct = await addProduct(req.body);
      const products = await getProducts();
      res.send(newProduct);
    } catch (error) {}
    res.status(500).json({
      message: req.body,
    });
  });
router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const product = await getProduct(id);
      res.send(product);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка, попробуйте позже",
      });
    }
  })
  .delete(async (req, res) => {
    try {
      await removeProduct(req.params.id);
      const products = await getProducts();
      res.send(products);
    } catch (error) {}
    res.status(500).json({
      message: "На сервере произошла ошибка, попробуйте позже",
    });
  })
  .put(async (req, res) => {
    try {
      const updatedProduct = await updateProduct({
        ...req.body,
        id: req.params.id,
      });
      res.send(updatedProduct);
    } catch (error) {}
    res.status(500).json({
      message: "На сервере произошла ошибка, попробуйте позже",
    });
  });
module.exports = router;
