import mysql from "mysql2/promise";
import { NextApiResponse, NextApiRequest } from "next";

export default async function getData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });
  try {
    const [rows] = await connection.query('SELECT * FROM user');
    res.status(200).json(rows);
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  };
}
