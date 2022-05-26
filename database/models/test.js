import express from "express";
import client from "../client.js";

const router = express.Router();

router.post("/table", (req, res) => {
	client.query(
		`CREATE TABLE Persons (personid int, lastname varchar(255), firstname varchar(255));`,
		(err, res) => {
			if (err) {
				console.log(err.stack);
			} else {
				console.log("no error", res);
			}
		}
	);
	res.send("ok");
});

export default router;
