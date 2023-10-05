import { sendQuery } from "../../../dataAccess/SQLdal";

export const getAllCustomersQuery = async () => {
  try {
    const query = "SELECT * FROM customers";
    const customers = await sendQuery(query);
    return customers;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getCustomerByIDQuery = async (id: string) => {
  try {
    const query = `SELECT * FROM customers WHERE customer_id = ${id}`;
    const customer = await sendQuery(query);
    return customer;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getCustomerByDetailQuery = async (
  param: string,
  detail: string
) => {
  try {
    const query = `SELECT * FROM customers WHERE ${param} ILIKE '${detail}'`;
    const customer = await sendQuery(query);
    return customer;
  } catch (error) {
    return Promise.reject(error);
  }
};
