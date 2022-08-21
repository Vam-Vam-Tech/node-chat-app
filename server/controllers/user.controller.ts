import { Request, Response } from "express";
import { find, create } from "../services/user.services";

export const userList = async (req: Request, res: Response) => {
	const users = await find();
	if (users.length > 0) {
		res.status(200).json({
			meta: {
				status: 200,
				success: true,
				message: "User list fetched successfully.",
			},
			body: users,
		});
	} else {
		res.status(404).json({
			meta: {
				status: 404,
				success: false,
				message: "User not found.",
			},
			body: null,
		});
	}
};

export const createUser = async (req: Request, res: Response) => {
	let { username, firstname, lastname, email, password } = req.body;
	try {
		const createdUser = await create({
			userName: username,
			firstName: firstname,
			lastName: lastname,
			email,
			password,
		});

		res.status(201).json({
			meta: {
				status: 201,
				success: true,
				message: "User created successfully.",
			},
			body: createdUser,
		});
	} catch (err) {
		res.status(400).json({
			meta: {
				status: 404,
				success: false,
				message: "User not found.",
			},
			body: null,
		});
	}
};
