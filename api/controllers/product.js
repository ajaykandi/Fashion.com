const Product = require("../models/product");

// creating Product
const createProduct = async (req, res) => {
  try {
    const product = await Product.create({ ...req.body });
    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// fetching Products

const getProducts = async (req, res) => {
  const { category } = req.query;
  try {
    let products;
    if (!category) {
      products = await Product.find();
    } else {
      products = await Product.find({
        categories: { $in: [category] },
      });
    }

    res.status(201).json({ products });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// fetching single Product by Id

const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(201).json({ product });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

module.exports = { createProduct, getProducts, getSingleProduct };
