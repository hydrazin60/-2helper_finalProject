import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    userCollage: {
      type: String,
    },
    phonenumber: {
      type: Number,
    },
    classSelection: {
      type: String,
      enum: ["Class-Xi", "Class-Xii", "Dropper"],
    },
  },
  { timestamps: true } // corrected option
);

const User = mongoose.model("User", userSchema);
export default User;
