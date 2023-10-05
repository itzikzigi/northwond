import { Pool } from "pg";

const userName = process.env.SQL_DB_UN;
const password = process.env.SQL_DB_PASS;

export const client = new Pool({
  host: "127.0.0.1",
  port: 5432,
  user: userName,
  password,
  database: "northwind",
});

export const connectToSQL = async () => {
  try {
    await client.connect();
    return "connected to sql";
  } catch (error) {
    return Promise.reject(error);
  }
};

export const sendQuery = async (req: string) => {
  try {
    const res = await client.query(req);
    if (req.includes("SELECT") && !res.rows.length)
      throw new Error("no result found");
    return res.rows;
  } catch (error) {
    return Promise.reject(error);
  }
};
