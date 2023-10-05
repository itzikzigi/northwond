import { sendQuery } from "../../../dataAccess/SQLdal";

export const getAllOrdersQuery = async () => {
  try {
    const query = "SELECT * FROM orders";
    const orders = await sendQuery(query);
    return orders;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getOrderByIDQuery = async (id: string) => {
  try {
    const query = `SELECT * FROM orders WHERE order_id = ${id}`;
    const order = await sendQuery(query);
    return order;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getOrderByDetailQuery = async (param: string, detail: string) => {
  try {
    const query = `SELECT * FROM orders WHERE ${param} ILIKE '${detail}'`;
    const order = await sendQuery(query);
    return order;
  } catch (error) {
    return Promise.reject(error);
  }
};
