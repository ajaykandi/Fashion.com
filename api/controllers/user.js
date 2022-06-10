const bcrypt = require("bcryptjs/dist/bcrypt");
const user = require("../models/user");
const User = require("../models/user");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(404).json({ msg: "Please Enter all Credentials.." });
  }
  const user = await User.findOne({ email });
  user && res.status(404).json({ msg: "Email exists already... " });

  try {
    const user = await User.create({ ...req.body });
    const token = user.createJwtToken();
    res.status(201).json({ user: { user: user.name }, token });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json({ msg: "Email or Password Missing.." });
  }

  try {
    const user = await User.findOne({ email });
    !user && res.status(404).json({ msg: "Email doesn't exists" });

    const isMatch = await bcrypt.compare(password, user.password);
    !isMatch && res.status(404).json({ msg: "Invalid credentials ..." });

    const token = user.createJwtToken();
    res
      .status(200)
      .json({ loggedIn: true, name: user.name, id: user._id, token });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { registerUser, loginUser };
