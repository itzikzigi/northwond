import { comparePassword, generateUserPassword } from "../helpers/bcrypt";
import UserInterface from "../interfaces/UserInterface";
import { UserModel } from "../models/mongoose/User";
import { getDataFromDummy } from "../../dataAccess/dummyjson";
import {
  addProductToUserInDBDal,
  deleteUserFromDBDAl,
  editUserInDBDal,
  getAllUsersDal,
  getUserByIdDal,
  userRegistrationDal,
} from "../../dataAccess/mongoDBDal";
import { generateToken } from "../../auth/Providers/jwt";

export const getAllUsers = async () => {
  try {
    const users = await getAllUsersDal();
    return users;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await getUserByIdDal(id);
    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const userRegistration = async (data: UserInterface) => {
  try {
    const emailCheck = await isEmailUniqCheck(data.email);
    if (!emailCheck) throw new Error("Email already in use");
    data.password = generateUserPassword(data.password);
    if (!data.isAdmin) data.isAdmin = false;
    const adding = await userRegistrationDal(data);
    return `${adding.email} registered successfully`;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const isEmailUniqCheck = async (userMail: string) => {
  try {
    const checkEmail = await UserModel.find({ email: userMail });
    if (!(checkEmail === null || checkEmail.length === 0)) return false;
    return true;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteUserFromDB = async (id: string) => {
  try {
    const deleteAction = await deleteUserFromDBDAl(id);
    return `user ${deleteAction.email} deleted successfully`;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const editUserInDB = async (id: string, data: UserInterface) => {
  try {
    const currentData = await getUserById(id);
    if (
      currentData.email !== data.email &&
      !(await isEmailUniqCheck(data.email))
    )
      data.password = generateUserPassword(data.password);
    const update = await editUserInDBDal(id, data);
    return update;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const userLogin = async (data: UserInterface) => {
  try {
    const user: UserInterface | null = await UserModel.findOne({
      email: data.email,
    });
    if (!user || !comparePassword(data.password, user.password))
      throw new Error("incorrect password or email");
    const token = generateToken(user);
    return token;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addProductToUserInDB = async (id: string, part: string) => {
  try {
    const data = (await getDataFromDummy()).data.products;
    if (!data) throw new Error("no products found");
    let matchedProduct = data.find((item: { title: string }) =>
      item.title.toLowerCase().trim().includes(part.toLowerCase().trim())
    );
    if (!matchedProduct) throw new Error("no match in products list");
    const product = { product: matchedProduct };
    const user = await addProductToUserInDBDal(id, product);

    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};
