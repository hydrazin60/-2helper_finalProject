import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/user.route.js";
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
mongoose
.connect(process.env.MONGODB_URL)
.then(() => {
  console.log("MongoDb is Connected");
})
.catch((error) => {
  console.log(error);
});

app.use("/api/v1/user/" , router )

app.listen(PORT, () => {
  console.log(`server running on port:${PORT}`);
});
