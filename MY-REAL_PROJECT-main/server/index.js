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
 
app.use("/api/v1/user" ,route )

app.listen(PORT, () => {
  console.log(`server running on port:${PORT}`);
});
