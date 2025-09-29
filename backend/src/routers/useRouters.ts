import express, { Request, Response } from "express";
import { registerUser } from "../controllers/registerUser";
import { LoginDb } from "../controllers/loginDb";
import { verifyToken } from "../middleware/verifiToken";
import { dashboar } from "../controllers/dashboar";
import { logout } from "../controllers/Logout";
import { NewLoan } from "../controllers/NewLoan";
import { showLoan } from "../controllers/showLoan";
import { InactiveLoans } from "../controllers/InactiveLoans";
const router = express.Router();

router.get("/dashboard", dashboar);

router.post("/logout", logout);

router.post("/newloan", NewLoan);

router.get("/showloans", showLoan);

router.get("/inactiveLoans", InactiveLoans);
export default router;
