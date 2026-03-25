import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDb from "./config/db.js";
import TourRouter from "../server/Routers/TourRouter.js";
const app = express();
app.use(express.json());
app.use(cors());
connectDb();
app.use("/api", TourRouter);
app.use("/images", express.static("images"));
app.listen(
  process.env.PORT,
  console.log(`server is runnig on port ${process.env.PORT}`),
);
