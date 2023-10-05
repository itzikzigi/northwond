import { Request, Response } from "express";
import { handleError } from "../../../utils/handleErrors";
import {
  getAllCustomersQuery,
  getCustomerByIDQuery,
  getCustomerByDetailQuery,
} from "../service/service";

export const getAllCustomersReq = async (req: Request, res: Response) => {
  try {
    const customers = await getAllCustomersQuery();
    return res.send(customers);
  } catch (error) {
    handleError(res, error);
  }
};

export const getCustomerByIDReq = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const customer = await getCustomerByIDQuery(id);
    res.send(customer);
  } catch (error) {
    handleError(res, error);
  }
};

export const getCustomerByDetailReq = async (req: Request, res: Response) => {
  try {
    const key = Object.keys(req.query);
    const val = Object.values(req.query);
    const customer = await getCustomerByDetailQuery(
      String(key[0]),
      String(val[0])
    );
    res.send(customer);
  } catch (error) {
    handleError(res, error);
  }
};
