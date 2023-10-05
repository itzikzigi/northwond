import { Request, Response } from "express";
import {
  getAllEmployeesQuery,
  getEmployeeByDetailQuery,
  getEmployeeByIDQuery,
} from "../service/service";
import { handleError } from "../../../utils/handleErrors";

export const getAllEmployeesReq = async (req: Request, res: Response) => {
  try {
    const employees = await getAllEmployeesQuery();
    return res.send(employees);
  } catch (error) {
    handleError(res, error);
  }
};

export const getEmployeeByIDReq = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const employee = await getEmployeeByIDQuery(id);
    res.send(employee);
  } catch (error) {
    handleError(res, error);
  }
};

export const getEmployeeByDetailReq = async (req: Request, res: Response) => {
  try {
    const key = Object.keys(req.query);
    const val = Object.values(req.query);
    const employee = await getEmployeeByDetailQuery(
      String(key[0]),
      String(val[0])
    );
    res.send(employee);
  } catch (error) {
    handleError(res, error);
  }
};
