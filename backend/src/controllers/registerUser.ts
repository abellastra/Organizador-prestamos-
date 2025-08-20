import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import { db } from "../db/db";

export const registerUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ error: "username and password are required" });
    return;
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query("INSERT INTO users(username, password) VALUES (?, ?)", [
      username,
      hashedPassword,
    ]);
    res.status(201).json({ message: "user registered successfully" });
    return;
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "user name exist" });
    return;
  }
};
