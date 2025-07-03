import { Request, Response, NextFunction } from "express";

import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
console.log("verifiToken, verifitoken.ts");
export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).json({ error: "acces denied, token not send" });
    return;
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET!)as JwtPayload &{id:number;username:string;}
    // console.log(decode.id,'DECODE')
    // req.user = decode 
    next();
  } catch (error) {
    res.status(403).json({ error: "token is expired or invaded" });
    return;
  }
};
