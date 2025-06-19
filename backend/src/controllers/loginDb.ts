import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { Response, Request } from "express";
import { db } from "../db/db";
import jwt from "jsonwebtoken";

dotenv.config();
export const LoginDb = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ error: "username or password are required " });
    return;
  }

  try {
    const [rows]: any = await db.query(
      `SELECT * FROM users where username=? `,
      [username]
    );
    const user = rows[0];
    if (!user) {
        console.log('user is not')
      res.status(400).json({ error: "user or passwor is incorrect " });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        console.log("user is not match");

      res.status(400).json({ error: "user or password is incorrect" });
      return;
    }
    const token = jwt.sign(
      { id:user.id, username:user.username },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    )
    res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite:"strict",
        maxAge: 60 * 60 * 1000, // 1 hora

    })
    res.status(200).json({ loggeIn: true });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
