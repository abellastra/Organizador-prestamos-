import { Request,Response } from "express";

export const dashboar=(req:Request, res:Response)=>{
    res.status(200).json({massage:'bienvenido'})
}