 import { Request, Response } from 'express';
 import {db} from '../db/db.js';

 export const resgisterUser=async (req:Request ,res :Response)=>{

    const {username,password}=req.body;
    if(!username ||!password){
        return res.status(400).json({error:'username and password are required'})
    }
    try {
        const [existengUser]= await db.query('SELECT  * FROM users WHERE username=?',[username])
        if((existengUser as any[]).length>0){
            return res.status(409).json({error:'username already exists'})
        }
        await db.query('INSERT INTO users(username,password) VALUES(?,?)',[username,password]);
        res.status(201).json({messaje:'user registered successfully'})
        
    } catch (error) {
        console.error('error registering user:',error)
        res.status(500).json({error:'internal server error'})
    }

 }
