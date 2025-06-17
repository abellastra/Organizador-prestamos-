import { Request,Response } from "express";

export const dashboar=(req:Request, res:Response)=>{
    console.log('dashboard')
    res.status(200).json({massage:'bienvenido'})
}