import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";
import authRouter from "./routes/authRoute.js";
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
connectDB();

app.use("/api/auth/", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running in Port No. ${PORT}`);
});
