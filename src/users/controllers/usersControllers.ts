import UserInterface from "../interfaces/UserInterface";
// import {
//   getUsers,
//   getUser,
//   register,
//   editUser,
//   deleteUser,
//   login,
//   addProductToUser,
// } from "../services/usersApiService";
import { handleError } from "../../utils/handleErrors";
import userValidation from "../models/joi/userValidation";
import { Request, Response } from "express";
import {
  addProductToUserInDB,
  deleteUserFromDB,
  editUserInDB,
  getAllUsers,
  getUserById,
  userLogin,
  userRegistration,
} from "../services/mogoDBService";

export const handleGetUsers = async (req: Request, res: Response) => {
  try {
    if (!req.user) throw new Error("There is no user");
    const { isAdmin } = req.user;
    if (!isAdmin) throw new Error("Unauthorized User");

    const users = await getAllUsers();
    return res.send(users);
  } catch (error) {
    if (error instanceof Error && error.message === "Unauthorized User")
      return handleError(res, error, 403);
    return handleError(res, error);
  }
};

export const handleGetUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    return res.send(user);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleUserRegistration = async (req: Request, res: Response) => {
  try {
    const user: UserInterface = req.body;

    const { error } = userValidation(user);
    if (error?.details[0].message) throw new Error(error?.details[0].message);

    const userFromDB = await userRegistration(user);
    return res.status(201).send(userFromDB);
  } catch (error) {
    if (error instanceof Error) handleError(res, error);
  }
};

export const handleEditUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user: UserInterface = req.body;

    const { error } = userValidation(user);
    if (error?.details[0].message) throw new Error(error?.details[0].message);

    const userFromDB = await editUserInDB(id, user);
    return res.send(userFromDB);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleDeleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await deleteUserFromDB(id);
    return res.send(user);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleLogin = async (req: Request, res: Response) => {
  try {
    const userFromClient: UserInterface = req.body;
    console.log(userFromClient);

    const { error } = userValidation(userFromClient);
    if (error?.details[0].message) throw new Error(error?.details[0].message);

    const token = await userLogin(userFromClient);
    return res.send(token);
  } catch (error) {
    handleError(res, error, 401);
  }
};

export const handleAddProductToUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { product } = req.query;

    const userWithProduct = await addProductToUserInDB(id, String(product));
    if (!userWithProduct)
      throw new Error("Could not add this product to this user");
    return res.send(userWithProduct);
  } catch (error) {
    handleError(res, error);
  }
};
