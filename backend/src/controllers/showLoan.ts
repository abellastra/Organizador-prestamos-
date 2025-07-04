import {db} from "../db/db"
import { Request,Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const showLoan= async ( req:Request ,res:Response)=>{
      const token = req.cookies.token;
      const decode = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
      const user_id = decode.id;
    
    if (!token) {
        res.status(401).json({ error: "Unauthorized" });
        return;
    }else{
        console.log(user_id)
    }
    try {   
        
        const [loans]= await db.query('SELECT * FROM data_loans WHERE user_id = ? AND status="ACTIVE" ', [user_id]);
        res.status(200).json({loans});
    } catch (error) {
        console.error("Error showing loans:", error);
        res.status(500).json({ error: "error loans" });
        return;
    } 

}