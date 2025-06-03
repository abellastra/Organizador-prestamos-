import express from "express";
import {registerUser} from "./../controllers/registerUser.js";

const router = express.Router();
console.log(registerUser,'registerUser function loaded archivo useRouters' );

router.post("/register", registerUser);

export default router
