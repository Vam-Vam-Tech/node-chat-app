import { Router } from "express";
import {
	createMessage,
	findMessageById,
} from "../controllers/message.controller";

const message = Router();

message.get("/", findMessageById);
message.post("/", createMessage);

export default message;
