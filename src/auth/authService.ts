import { verifyToken } from "./Providers/jwt";
import { handleError } from "../utils/handleErrors";
import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";

dotenv.config();

const tokenGenerator = process.env.JWT_KEY;

export const auth = (req: Request | any, res: Response, next: NextFunction) => {
  if (tokenGenerator) {
    try {
      const tokenFromClient = req.header("x-auth-token");
      if (!tokenFromClient)
        throw new Error("Authentication Error: Please login");

      const userPayload = verifyToken(tokenFromClient);
      if (!userPayload)
        throw new Error("Authentication Error: Unauthorize user");

      req.user = userPayload;
      return next();
    } catch (error) {
      return handleError(res, error, 401);
    }
  }
  if (!tokenGenerator) return handleError(res, "you don't use jet", 500);
};
