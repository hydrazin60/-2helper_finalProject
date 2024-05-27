 
import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const {
    username,
    email,
    password,
    userCollage,
    phonenumber,
    classSelection,
  } = req.body;

  if (!username?.trim() || !email?.trim() || !password?.trim()) {
    return next(errorHandler(400, "All fields are required!"));
  }

  const hashedPassword = bcryptjs.hashSync(password.trim(), 6);
  const newUser = new User({
    username: username.trim(),
    email: email.trim(),
    password: hashedPassword,
    userCollage: userCollage?.trim(),
    phonenumber,
    classSelection,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email?.trim() || !password?.trim()) {
    return next(errorHandler(400, "All fields are required"));
  }

  try {
    const validUser = await User.findOne({ email: email.trim() });
    if (!validUser) {
      return next(errorHandler(404, "User Not Found!"));
    }
    const validPassword = bcryptjs.compareSync(
      password.trim(),
      validUser.password
    );
    if (!validPassword) {
      return next(errorHandler(400, "Invalid Password"));
    }

    const SIX_MONTHS_IN_SECONDS = 180 * 24 * 60 * 60; // approximately 6 months
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
      expiresIn: SIX_MONTHS_IN_SECONDS,
    });

    res
      .status(200)
      .cookie("Access_Token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Ensure secure flag in production
        maxAge: SIX_MONTHS_IN_SECONDS * 1000, // maxAge is in milliseconds
      })
      .json({ user: validUser, token });
  } catch (err) {
    console.log(err);
    next(err);
  }
};




// import User from "../model/user.model.js";
// import bcryptjs from "bcryptjs";
// import jwt from "jsonwebtoken";
// import { errorHandler } from "../utils/error.js";
// export const signup = async (req, res, next) => {
//   const {
//     username,
//     email,
//     password,
//     userCollage,
//     phonenumber,
//     classSelection,
//   } = req.body;
//   if (
//     !username ||
//     !email ||
//     !password ||
//     username === " " ||
//     email === " " ||
//     password === " "
//   ) {
//     next(errorHandler(400, "All field are Required !"));
//   }

//   const hashedPassword = bcryptjs.hashSync(password, 6);
//   const newUser = new User({
//     username,
//     email,
//     password: hashedPassword,
//     userCollage,
//     phonenumber,
//     classSelection,
//   });
//   try {
//     await newUser.save();
//     res.json("Signup successful");
//   } catch (err) {
//     next(err);
//   }
// };

// export const signin = async (req, res, next) => {
//   const { email, password } = req.body;
//   if (!email || !password || email === " " || password === " ") {
//     next(errorHandler(400, "All filds are required"));
//   }
//   try {
//     const validUser = await User.findOne({ email });
//     if (!validUser) {
//       next(errorHandler(404), "User Not Found !");
//     }

//     const validPassword = bcryptjs.compareSync(password, validUser.password);
//     if (!validPassword) {
//       return next(errorHandler(400, "Invalide Password"));
//     }

//     const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
//       expiresIn: "6m",
//     });
//     res
//       .status(200)
//       .cookie("Access_Token", token, {
//         httpOnly: true,
//       })
//       .json(validUser);
//   } catch (err) {
//     next(err);
//   }
// };