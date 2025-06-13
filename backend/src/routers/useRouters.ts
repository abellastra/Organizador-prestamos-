import express, { Router } from "express";
import { registerUser } from "../controllers/registerUser";
import{ LoginDb} from "../controllers/loginDb"
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", LoginDb)

console.log("✅ Router cargado con /register");

export default router;