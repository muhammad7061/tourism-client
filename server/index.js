import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(
  process.env.PORT,
  console.log(`server is runnig on port ${process.env.PORT}`),
);
