import { sendQuery } from "../../../dataAccess/SQLdal";

export const getAllProductsQuery = async () => {
  try {
    const query = "SELECT * FROM products";
    const products = await sendQuery(query);
    return products;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getProductByIDQuery = async (id: string) => {
  try {
    const query = `SELECT * FROM products WHERE product_id = ${id}`;
    const product = await sendQuery(query);
    return product;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getProductByDetailQuery = async (
  param: string,
  detail: string
) => {
  try {
    const query = `SELECT * FROM products WHERE ${param} ILIKE '${detail}'`;
    const product = await sendQuery(query);
    return product;
  } catch (error) {
    return Promise.reject(error);
  }
};
