import express, { Request, Response } from "express";

import { db } from "../db/db";

export const registerUser = async (
  req: Request,
  res: Response
) => {
  const { username, password } = req.body;
  console.log(req.body);

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "username and password are required" });
  }

  try {
    const [existingUser] = await db.query(
      "SELECT * FROM users WHERE username=?",
      [username]
    );
    if ((existingUser as any[]).length > 0) {
      return res.status(409).json({ error: "username already exists" });
    }

    await db.query("INSERT INTO users(username, password) VALUES (?, ?)", [
      username,
      password,
    ]);
    return res.status(201).json({ message: "user registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ error: "internal server error" });
  }
};
