import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
console.log(token,'token')
  if (!token) {
    res.status(401).json({ error: "acces denied, token not send" });
    return;
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET!);
    console.log(decode);
    // req.user = decode;
    next();
  } catch (error) {
    res.status(403).json({ error: "token is expired or invaded" });
    return;
  }
};
