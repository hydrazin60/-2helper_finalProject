import express from "express";
import { signup  } from "../controllers/auth.controller.js"; // Corrected import path
import { signin } from "../controllers/auth.controller.js";
import { google } from "../controllers/auth.controller.js";
const authRoutes = express.Router();
authRoutes.post("/signup", signup);
authRoutes.post("/signin",  signin);
authRoutes.post("/google" , google )
export default authRoutes;