import { Schema, model } from "mongoose";

const { String, ObjectId } = Schema.Types;

const userSchema = new Schema(
	{
		firstName: { type: String },
		lastName: { type: String },
		userName: { type: String },
		email: { type: String },
		password: {
			type: String,
		},
		image: {
			type: ObjectId,
			ref: "File",
		},
		status: {
			type: String,
			default: "active",
		},
		token: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

export default model("User", userSchema);
