import { Request, Response } from "express";
import { handleError } from "../../../utils/handleErrors";
import {
  getAllOrdersQuery,
  getOrderByIDQuery,
  getOrderByDetailQuery,
} from "../service/service";

export const getAllOrdersReq = async (req: Request, res: Response) => {
  try {
    const orders = await getAllOrdersQuery();
    return res.send(orders);
  } catch (error) {
    handleError(res, error);
  }
};

export const getOrderByIDReq = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const order = await getOrderByIDQuery(id);
    res.send(order);
  } catch (error) {
    handleError(res, error);
  }
};

export const getOrderByDetailReq = async (req: Request, res: Response) => {
  try {
    const key = Object.keys(req.query);
    const val = Object.values(req.query);
    const order = await getOrderByDetailQuery(String(key[0]), String(val[0]));
    res.send(order);
  } catch (error) {
    handleError(res, error);
  }
};
