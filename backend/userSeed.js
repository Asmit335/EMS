import { connectDB } from "./database/db.js";
import UserM from "./model/userModel.js";
import bcrypt from "bcrypt";
const userRegister = async () => {
  try {
    await connectDB();
    const existingAdmin = await new UserM.findOne({ email: "admin@gmail.com" });
    if (existingAdmin) {
      console.log("Admin Email already Existed.");
      return;
    }
    const hashPassword = await bcrypt.hash("admin", 10);
    const newUser = new UserM({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashPassword,
      role: "admin",
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
  }
};

userRegister();
