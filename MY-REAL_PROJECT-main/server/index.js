import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
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
app.get("/", (req ,res)=>{
  res.send("server code start")
})
app.get("/home" , (req ,res)=>{
  res.send("welcome to nepal")
})
app.get("/login" , (req ,res)=>{
  console.log("demo");
})
app.listen(PORT, () => {
  console.log(`server running on port:${PORT}`);
});
