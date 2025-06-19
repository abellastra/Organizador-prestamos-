import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload & {
        id: number;
        username: string;
        // rol?: string; // Si necesitas más campos
      };
    }
  }
}
