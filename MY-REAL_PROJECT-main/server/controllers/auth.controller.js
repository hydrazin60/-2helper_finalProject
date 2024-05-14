import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"
export const signup = async (req, res) => {
  const {
    username,
    email,
    password,
    userCollage,
    phonenumber,
    classSelection,
  } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === " " ||
    email === " " ||
    password === " "
  ) {
    return;
  }

  const hashedPassword =  bcryptjs.hashSync(password , 6)
  const newUser = new User({
    username,
    email,
    password : hashedPassword,
    userCollage,
    phonenumber,
    classSelection,
  });
  try {
    await newUser.save();
    res.json("Signup successful");
  } catch (err) {
    console.log(err);
  }
};
