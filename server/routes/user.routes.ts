import { Router } from "express";
import { userList, createUser } from "../controllers/user.controller";

const user = Router();

user.get("/", userList);
user.post("/", createUser);
// user.post("/register");

export default user;
