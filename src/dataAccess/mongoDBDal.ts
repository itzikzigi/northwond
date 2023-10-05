import { connect } from "mongoose";
import { UserModel } from "../users/models/mongoose/User";
import UserInterface from "../users/interfaces/UserInterface";

const connectToDB = async () => {
  try {
    await connect("mongodb://127.0.0.1:27017/david's_server");
    return "connected to mongoDB";
  } catch (error) {
    Promise.reject("An error accrued while connecting to DB  " + error);
  }
};

export const getAllUsersDal = async () => {
  try {
    const users = await UserModel.find();
    return users;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getUserByIdDal = async (id: string) => {
  try {
    const user = await UserModel.findById(id);
    if (!user) throw new Error("user does not exist");
    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const userRegistrationDal = async (user: UserInterface) => {
  try {
    const newUser = new UserModel({ ...user });
    const adding = await newUser.save();
    return adding;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteUserFromDBDAl = async (id: string) => {
  try {
    const deleteAction = await UserModel.findByIdAndDelete(id);
    if (!deleteAction) throw new Error("user does not exist");
    return deleteAction;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const editUserInDBDal = async (id: string, data: UserInterface) => {
  try {
    const update = await UserModel.findOneAndUpdate(
      { _id: id },
      { ...data },
      { new: true }
    );
    if (!update) throw new Error("user update failed");
    return update;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addProductToUserInDBDal = async (id: string, product: object) => {
  try {
    const user = await UserModel.findByIdAndUpdate(id, product, {
      new: true,
      upsert: true,
    });

    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectToDB;
