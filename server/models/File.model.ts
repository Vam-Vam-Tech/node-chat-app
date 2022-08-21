import { Schema, model } from "mongoose";

const { String } = Schema.Types;

const fileSchema = new Schema(
	{
		name: {
			type: String,
		},
		url: {
			type: String,
		},
		status: {
			type: String,
			default: "active",
		},
	},
	{
		timestamps: true,
	}
);

export default model("File", fileSchema);
