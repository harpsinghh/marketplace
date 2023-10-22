const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Define routes
router.get("/products/search", productController.findProductsByNameContaining);
router.post("/products", productController.createProduct);
router.get("/products", productController.getAllProducts);
router.get("/products/:productId", productController.getProductById);
router.put("/products/:productId", productController.updateProduct);
router.delete("/products/:productId", productController.deleteProduct);
router.delete("/products", productController.removeAllProducts);

module.exports = router;
