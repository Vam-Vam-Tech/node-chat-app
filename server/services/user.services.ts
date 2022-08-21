import { User } from "../models";
import { UserCreateProps } from "../interfaces/user";

export const find = () => {
	return User.find();
};

export const create = ({
	email,
	userName,
	firstName,
	lastName,
	password,
}: UserCreateProps) => {
	const newUser = new User({
		email,
		userName,
		firstName,
		lastName,
		password,
	});

	return newUser.save();
};
