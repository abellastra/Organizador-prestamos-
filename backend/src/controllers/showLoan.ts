import {db} from "../db/db"
import { Request,Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const showLoan= async ( req:Request ,res:Response)=>{
    //@ts-ignore
     const user_id = req?.user?.id
     console.log(user_id, "user_id showLoan");
    if (!user_id) {
        res.status(401).json({ error: "acces denied, token not send" });
        return;
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