import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routes/auth.route.js";
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(`MongoDb is Connected ${process.env.MONGODB_URL}`);
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());

app.listen(PORT, () => {
  console.log(`server running on port:${PORT}`);
});

app.use("/api/v1/user", route);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    sucess: false,
    statusCode,
    message,
  });
});
