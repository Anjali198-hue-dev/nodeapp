
import express from "express";
import bodyParser from "body-parser";
import http from "http";
import userRouter from "./routes/UserRoutes.js";
import mongoose from "mongoose";
const MONGO_URI = "mongodb+srv://prince146verma:zPRNZSpSky0OOtm2@cluster0.ypiswra.mongodb.net/shark_pocket?retryWrites=true&w=majority";

const connectDB = async () => {
  console.log("Connecting to MongoDB...");
  try {
    await mongoose.connect(MONGO_URI);
    console.log("mongodb connection success!");
  } catch (err) {
    console.log("mongodb connection failed!", err.message);
  }
};
connectDB();

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.set("trust proxy", 1);
app.use(express.json({ limit: "4mb" }));

app.use("/api/v2", userRouter);

const PORT = 8080;

// server.listen(PORT, () =>
//   console.log(`server running on port http://localhost:${PORT}`)
// );

server.listen(PORT, () =>
  console.log(`server running on port https://api.sharkpocketinfra.in`)
);
// '192.168.29.65',
// 192.168.29.57
