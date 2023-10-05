import { sendQuery } from "../../../dataAccess/SQLdal";

export const selectQuery = async (field: string[]) => {
  try {
    const query = `SELECT ${[...field]} FROM university.students`;
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
    ]} FROM university.students WHERE student_id =${id}`;
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
    const query = `UPDATE university.students SET ${[...field]} = '${[
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
    const query = `DELETE FROM university.students WHERE student_id = ${id}`;
    const del = await sendQuery(query);
    return del;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const insertQuery = async (data: StudentInterface) => {
  try {
    const { firstName, lastName, birthday, email } = data;
    const query = `INSERT INTO university.students (first_name, last_name, date_of_birth, email) VALUES ('${firstName}','${lastName}','${birthday}','${email}') RETURNING *`;
    const inserting = await sendQuery(query);
    return inserting;
  } catch (error) {
    return Promise.reject(error);
  }
};
