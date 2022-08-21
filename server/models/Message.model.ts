import { Schema, model } from "mongoose";

const { String, ObjectId } = Schema.Types;

const messageSchema = new Schema(
	{
		message: {
			type: String,
		},
		sender: {
			type: ObjectId,
			ref: "User",
		},
		receiver: {
			type: ObjectId,
			ref: "User",
		},
		file: {
			type: ObjectId,
			ref: "File",
		},
		status: {
			type: String,
			default: "send",
		},
	},
	{
		timestamps: true,
	}
);

export default model("Message", messageSchema);
