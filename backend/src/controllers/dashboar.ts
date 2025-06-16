import { Request,Response } from "express";

export const dashboar=(req:Request, res:Response)=>{
    const user=req.user;
    console.log('dashboard',user)
    res.status(200).json({massage:'bienvenido'})
}