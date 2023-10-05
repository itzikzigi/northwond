import { sendQuery } from "../../../dataAccess/SQLdal";

export const selectQuery = async (field: string[]) => {
  try {
    const query = `SELECT ${[...field]} FROM university.teachers`;
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
    ]} FROM university.teachers WHERE teacher_id =${id}`;
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
    const query = `UPDATE university.teachers SET ${[...field]} = '${[
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
    const query = `DELETE FROM university.teachers WHERE teachers_id = ${id}`;
    const del = await sendQuery(query);
    return del;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const insertQuery = async (data: TeacherInterface) => {
  try {
    const { firstName, lastName, birthday, email, department, hireDate } = data;
    const query = `INSERT INTO university.teachers (first_name, last_name, date_of_birth, email,department, hire_date) VALUES ('${firstName}','${lastName}','${birthday}','${email}','${department}','${hireDate}') RETURNING *`;
    const inserting = await sendQuery(query);
    return inserting;
  } catch (error) {
    return Promise.reject(error);
  }
};
