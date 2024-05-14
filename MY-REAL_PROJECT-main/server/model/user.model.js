import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },

    password: {
      type: String,
      require: true,
    },
    userCollage: {
      type: String,
    },
    phonenumber: {
      type: Number,
    },
    classSelection: {
      type: String,
      enum: ["Class-Xi", " Class-Xii ", "Dropper"],
    },
  },
  { timeseries: true }
);

const User = mongoose.model("User", userSchema);
export default User;
