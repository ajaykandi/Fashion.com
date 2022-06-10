const Order = require("../models/order");
const Createorder = async (req, res) => {
  try {
    const order = await Order.create({ ...req.body });
    res.status(200).json({ order });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
module.exports = Createorder;
