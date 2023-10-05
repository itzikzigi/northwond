import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserInterface from "../../users/interfaces/UserInterface";

dotenv.config();
const KEY = process.env.JWT_KEY;

export const generateToken = (user: UserInterface) => {
  if (!KEY) throw new Error("key is not defined");
  const { _id, isAdmin } = user;
  const token = jwt.sign({ _id, isAdmin }, KEY);
  return token;
};

export const verifyToken = (tokenFromUser: string) => {
  try {
    if (!KEY) throw new Error("key is not defined");
    const userPayload = jwt.verify(tokenFromUser, KEY);
    return userPayload;
  } catch (error) {
    return null;
  }
};
