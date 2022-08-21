import { Request, Response } from "express";
import { create, findById } from "../services/message.services";
import { Responser } from "../utilities";

export const createMessage = async (req: Request, res: any) => {
	let { sender, receiver, message } = req.body;
	try {
		if (sender && receiver && message) {
			const createdMessage = await create({
				sender,
				receiver,
				message,
			});
			Responser({
				res,
				status: 201,
				body: createdMessage,
				message: "Message created successfully.",
				devMessage: "Message > Create > Success",
			});
		} else {
			Responser({
				res,
				status: 400,
				body: null,
				message: "sender, receiver & message are required.",
				devMessage: "Message > Create > Client ERROR",
			});
		}
	} catch (err) {
		Responser({
			res,
			status: 500,
			body: err,
			message: "Message cannot be created.",
			devMessage: "Message > Create > ERROR",
		});
	}
};

export const findMessageById = async (req: Request, res: any) => {
	try {
		const message = await findById({ id: req.query.id });
		if (message) {
			res.status(200).json({
				meta: {
					status: 200,
					success: true,
					message: "Message fetched successfully.",
				},
				body: message,
			});
		} else {
			res.status(404).json({
				meta: {
					status: 404,
					success: false,
					message: "Message not found.",
				},
				body: null,
			});
		}
	} catch (err) {
		res.status(500).json({
			meta: {
				status: 500,
				success: false,
				message: "Internal server error occured.",
			},
			body: err,
		});
	}
};
