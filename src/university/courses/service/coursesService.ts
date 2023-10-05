import { sendQuery } from "../../../dataAccess/SQLdal";

export const selectQuery = async (field: string[]) => {
  try {
    const query = `SELECT ${[...field]} FROM university.courses`;
    const res = await sendQuery(query);
    return res;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const selectQueryWithCondition = async (field: string[], id: string) => {
  try {
    const query = `SELECT ${[
      ...field,
    ]} FROM university.courses WHERE course_id =${id}`;
    const result = await sendQuery(query);
    return result;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateQuery = async (
  field: string[],
  newVal: string[],
  condition: string[]
) => {
  try {
    const query = `UPDATE university.courses SET ${[...field]} = '${[
      newVal,
    ]}' WHERE ${[...condition]} RETURNING *`;
    const result = await sendQuery(query);
    return result;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteQuery = async (id: number) => {
  try {
    const query = `DELETE FROM university.courses WHERE courses_id = ${id}`;
    const del = await sendQuery(query);
    return del;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const insertQuery = async (data: CourseInterface) => {
  try {
    const { courseName, credits, department } = data;
    const query = `INSERT INTO university.courses (course_name,department, credits) VALUES ('${courseName}','${department}','${credits}') RETURNING *`;
    const inserting = await sendQuery(query);
    return inserting;
  } catch (error) {
    return Promise.reject(error);
  }
};
