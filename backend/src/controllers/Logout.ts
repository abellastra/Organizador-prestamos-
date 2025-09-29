import { Request, Response } from "express";

export const logout = (req: Request, res: Response) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: true,
  });
  res.status(200).json({ message: "Session close correct" });
};
