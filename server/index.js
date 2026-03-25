import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDb from "./config/db.js";

const app = express();
app.use(express.json());
app.use(cors());
connectDb();
app.listen(
  process.env.PORT,
  console.log(`server is runnig on port ${process.env.PORT}`),
);
