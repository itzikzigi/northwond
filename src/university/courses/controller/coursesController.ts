import { Request, Response } from "express";
import {
  deleteQuery,
  insertQuery,
  selectQuery,
  selectQueryWithCondition,
  updateQuery,
} from "../service/coursesService";
import { handleError } from "../../../utils/handleErrors";

export const handleGetCourses = async (req: Request, res: Response) => {
  try {
    const result = await selectQuery(["*"]);
    return res.send(result);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleGetCourseByCon = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await selectQueryWithCondition(["*"], id);
    return res.send(result);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleUpdateCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { field, newVal } = req.body;
    const update = await updateQuery(field, newVal, [
      `course_id = ${Number(id)}`,
    ]);
    res.send(update);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleDeleteCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await deleteQuery(Number(id));
    res.send(result);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleAddCourse = async (req: Request, res: Response) => {
  try {
    const newCourse = req.body;
    const add = await insertQuery(newCourse);
    res.send(add);
  } catch (error) {
    handleError(res, error);
  }
};
