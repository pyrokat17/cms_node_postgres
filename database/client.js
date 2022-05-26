import pg from "pg";
import { DB_CREDENTIALS } from "../config/dbConfig.js";

const client = new pg.Client(DB_CREDENTIALS);
client.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
});

export default client;
