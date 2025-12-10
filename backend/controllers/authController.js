import UserM from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserM.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "Email not found.",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({
        message: "Password not matched.",
      });
    }
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_KEY,
      { expiresIn: "10d" }
    );
    res.status(200).json({
      message: "token set Successfully.",
      token: token,
      user: { _id: user._id, name: user.name, role: user.role },
    });
  } catch (error) {
    console.log("Error:", error.message);
  }
};
export { login };
