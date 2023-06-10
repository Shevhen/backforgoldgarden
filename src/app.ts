import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

// import { PlantsRouter } from "./routers/plantsRouter";

const app = express();

// const bodyParser = bodyParser()

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

app.use(cors());
// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ extended: true }));

// app.use("/plants", PlantsRouter);

app.get("/plants", (req, res) => {
  res.send("Hello");
});

const PORT = 5100 || "backforgoldgarden-production.up.railway.app";

app.listen(PORT, () => {
  mongoose.connect(
    "mongodb+srv://Yevhen:Yevhen@cluster0.ct2xzoh.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("server started!!!");
});
