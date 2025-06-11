import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import { db } from "../db/db.js";

export const registerUser = async (
  req: Request,
  res: Response
) => {
  const { username, password } = req.body;
  console.log(req.body);

  if (!username || !password) {
     res
      .status(400)
      .json({ error: "username and password are required" });
      return;
  }

  try {
    const [users]= await db.query("SELECT * FROM users");
    const [existingUser] = await db.query(
      "SELECT * FROM users WHERE username=?",
      [username]
    );
    if ((existingUser as any[]).length > 0) {
      res.status(409).json({ error: "username already exists" });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query("INSERT INTO users(username, password) VALUES (?, ?)", [
      username,
      hashedPassword,
    ]);
     res.status(201).json({ users, message: "user registered successfully" });
     return;
  } catch (error) {
    console.error("Error registering user:", error);
     res.status(500).json({ error: "internal server error" });
     return;
  }
};
