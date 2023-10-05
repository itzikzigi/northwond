import { sendQuery } from "../../../dataAccess/SQLdal";

export const getAllEmployeesQuery = async () => {
  try {
    const query = "SELECT * FROM employees";
    const employees = await sendQuery(query);
    return employees;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getEmployeeByIDQuery = async (id: string) => {
  try {
    const query = `SELECT * FROM employees WHERE employee_id = ${id}`;
    const employee = await sendQuery(query);
    return employee;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getEmployeeByDetailQuery = async (
  param: string,
  detail: string
) => {
  try {
    const query = `SELECT * FROM employees WHERE ${param} ILIKE '${detail}'`;
    const employee = await sendQuery(query);
    return employee;
  } catch (error) {
    return Promise.reject(error);
  }
};
