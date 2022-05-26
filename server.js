import express from "express";
import dotenv from "dotenv";
// import { client } from "./database/client.js";
// route imports
import test from "./database/models/test.js";

const app = express();
dotenv.config();
const port = process.env.PORT;

// client.connect(function (err) {
// 	if (err) throw err;
// 	console.log("Connected!");
// });
app.use("/api", test);
app.get("/test", async (req, res) => {
	res.send("hello");
});
app.listen(port, () => console.log(`Server started on ${port}`));
