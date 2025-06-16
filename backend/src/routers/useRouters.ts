import express, { Request,Response  } from "express";
import { registerUser } from "../controllers/registerUser";
import{ LoginDb} from "../controllers/loginDb"
import  {verifyToken}  from "../middleware/verifiToken";
import { dashboar } from "../controllers/dashboar";
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", LoginDb)

router.get("/dashboard", verifyToken,(req,res)=>{
try {
    res.json({ message: "entraste al dashboard" });
} catch (error) {
    res.json({error:'ERROR  AL ENTRAR '})
}});/*  , dashboar*/
console.log("✅ Router cargado con /register");

export default router;