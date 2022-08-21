import { Router } from "express";

const auth = Router();

auth.get("/", (req, res) => {
	res.send("hello from server");
});
auth.post("/register");

export default auth;
