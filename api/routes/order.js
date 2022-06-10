const Createorder = require("../controllers/order");

const router = require("express").Router();

router.post("/create", Createorder);

module.exports = router;
