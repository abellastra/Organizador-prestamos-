import express, { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { db } from "../db/db";
export const InactiveLoans = async (req: Request, res: Response) => {
      const token = req.cookies.token;
          const decode = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
          const user_id = decode.id;
    try {
        const [loans]= await db.query('SELECT * FROM data_loans WHERE user_id = ? AND status="INACTIVE" ', [user_id]);
        res.status(200).json({loans})
    } catch (error) {
        console.error("Error fetching inactive loans  from  database ", error )
        res.status(500).json({ message: "Internal server error" });
    }
}