import { Request, Response } from "express";
import { db } from "../db/db";

export const dashboar = async (req: Request, res: Response) => {
  //@ts-ignore

  const user = req.user as { id: number; username: string };

  //@ts-ignore
  const user_id = user;
  if (user_id) {
    const user = user_id.username;
    console.log(user, "user_id dashboar");

    res.status(200).json(user);
  }
};
