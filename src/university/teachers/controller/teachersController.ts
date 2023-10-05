import { Request, Response } from "express";
import {
  deleteQuery,
  insertQuery,
  selectQuery,
  selectQueryWithCondition,
  updateQuery,
} from "../service/teacherService";
import { handleError } from "../../../utils/handleErrors";

export const handleGetTeachers = async (req: Request, res: Response) => {
  try {
    const result = await selectQuery(["*"]);
    return res.send(result);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleGetTeacherByCon = async (req: Request, res: Response) => {
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

export const handleUpdateTeacher = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { field, newVal } = req.body;
    const update = await updateQuery(field, newVal, [
      `teacher_id = ${Number(id)}`,
    ]);
    res.send(update);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleDeleteTeacher = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await deleteQuery(Number(id));
    res.send(result);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleAddTeacher = async (req: Request, res: Response) => {
  try {
    const newTeacher = req.body;
    const add = await insertQuery(newTeacher);
    res.send(add);
  } catch (error) {
    handleError(res, error);
  }
};
