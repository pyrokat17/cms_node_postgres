import dotenv from "dotenv";
dotenv.config();

export const DB_CREDENTIALS = {
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: "postgres",
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT,
};
