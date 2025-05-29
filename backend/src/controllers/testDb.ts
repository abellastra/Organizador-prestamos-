import { db } from "../db/db.js";

export const testDb = async () => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    console.log("Database connection successful. Users:", rows);
  } catch (error) {
    console.error("Error testing database connection:", error);
    throw error;
  }
};
 