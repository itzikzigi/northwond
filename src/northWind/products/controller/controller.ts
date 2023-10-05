import { Request, Response } from "express";
import { handleError } from "../../../utils/handleErrors";
import {
  getAllProductsQuery,
  getProductByDetailQuery,
  getProductByIDQuery,
} from "../service/service";

export const getAllProductsReq = async (req: Request, res: Response) => {
  try {
    const products = await getAllProductsQuery();
    return res.send(products);
  } catch (error) {
    handleError(res, error);
  }
};

export const getProductByIDReq = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await getProductByIDQuery(id);
    res.send(product);
  } catch (error) {
    handleError(res, error);
  }
};

export const getProductByDetailReq = async (req: Request, res: Response) => {
  try {
    const key = Object.keys(req.query);
    const val = Object.values(req.query);
    const product = await getProductByDetailQuery(
      String(key[0]),
      String(val[0])
    );
    res.send(product);
  } catch (error) {
    handleError(res, error);
  }
};
