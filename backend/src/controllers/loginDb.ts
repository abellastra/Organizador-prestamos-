import bcrypt from "bcrypt";
import { Response,Request } from "express";
import { db } from "../db/db";
import { error } from "console";

export const LoginDb = async ( req:Request,res: Response) => {
  const { username, password } = req.body;

  if(!username || !password){
    res.status(400).json({error:'username or password are required '})
    return; 
  }

  try {
    const [rows]:any= await db.query(`SELECT * FROM users where username=? `,[username])
    const user =rows[0];
       const isMatch = await bcrypt.compare(password,user.password)
       if(!isMatch){
        res.status(400).json({error:'user or password is incorrect'})
       }
       res.status(200).json(true)
    return 

  } catch (error) {
    console.log(error)
    res.status(500).json({ message:'internal server error'})
  }
};
 