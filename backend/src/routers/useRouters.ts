import express, { Request,Response  } from "express";
import { registerUser } from "../controllers/registerUser";
import{ LoginDb} from "../controllers/loginDb"
import  {verifyToken}  from "../middleware/verifiToken";
import { dashboar } from "../controllers/dashboar";
import { logout } from "../controllers/Logout";
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", LoginDb)

router.get("/dashboard", verifyToken, dashboar);/* */

router.post('/logout',logout)
export default router;