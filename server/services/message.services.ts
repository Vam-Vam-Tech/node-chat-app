import { Message } from "../models";

export const create = ({ sender, receiver, message }: any) => {
	const newMessage = new Message({
		sender,
		receiver,
		message,
	});
	return newMessage.save();
};

export const findById = ({ id }: any) => {
	return Message.findById({
		_id: id,
	});
};
