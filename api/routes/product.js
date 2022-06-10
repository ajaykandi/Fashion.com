const {
  createProduct,
  getProducts,
  getSingleProduct,
} = require("../controllers/product");

const router = require("express").Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:id", getSingleProduct);

module.exports = router;
