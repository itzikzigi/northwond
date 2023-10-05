import { Request, Response } from "express";
import {
  deleteQuery,
  insertQuery,
  selectQuery,
  selectQueryWithCondition,
  updateQuery,
} from "../services/studentsService";
import { handleError } from "../../../utils/handleErrors";

export const handleGetStudents = async (req: Request, res: Response) => {
  try {
    const result = await selectQuery(["*"]);
    return res.send(result);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleGetStudentsByCon = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await selectQueryWithCondition(
      ["first_name", "last_name"],
      id
    );
    return res.send(result);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleUpdateStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { field, newVal } = req.body;
    const update = await updateQuery(field, newVal, [
      `student_id = ${Number(id)}`,
    ]);
    res.send(update);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleDeleteStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await deleteQuery(Number(id));
    res.send(result);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleAddStudent = async (req: Request, res: Response) => {
  try {
    const newStudent = req.body;
    const add = await insertQuery(newStudent);
    res.send(add);
  } catch (error) {
    handleError(res, error);
  }
};
