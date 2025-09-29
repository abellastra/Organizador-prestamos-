import { db } from "../db/db";
import jwt, { JwtPayload } from "jsonwebtoken";

import { Request, Response } from "express-serve-static-core";

export const NewLoan = async (req: Request, res: Response) => {
  const { borrower_name, date, amuontOfMoney, interest, quotas } = req.body;
  const token = req.cookies.token;
  const decode = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
  const user_id = decode.id;
  if (
    !user_id ||
    !borrower_name ||
    !date ||
    !amuontOfMoney ||
    !interest ||
    !quotas
  ) {
    res.status(400).json({ error: "data incomplete" });
  }
  try {
    const [table_info_pestamos] = await db.query("SELECT * FROM data_loans");
    await db.query(
      "INSERT INTO data_loans(user_id, borrower_name,start_date, loan_amount, quotas,interest) VALUES(?,?,?,?,?,?)",
      [user_id, borrower_name, date, amuontOfMoney, quotas, interest]
    );
    res.status(200).json({ table_info_pestamos });
  } catch (error) {
    res.status(400).json(error);
  }
};
