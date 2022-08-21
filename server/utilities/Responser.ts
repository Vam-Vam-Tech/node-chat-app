import { Response } from "express";
import moment from "moment";
import gradient from "gradient-string";

interface IResponser {
	res: Response;
	status: number;
	body: any;
	message: string;
	devMessage: any;
}

const current = moment().format("YYYY/MMMM/DD hh:mm:ss A");

const Responser = ({ res, status, body, message, devMessage }: IResponser) => {
	var success: boolean, log: string, dataBody: any;

	if (status >= 200 && status <= 300) {
		success = true;
		log =
			gradient("green", "green")("[ SUCCESS ] ") +
			gradient("green", "white")(`${devMessage}\n${message}\nTime: ${current}`);

		if (body && body !== null) {
			dataBody = body;
		} else {
			dataBody = null;
		}
	} else if (status >= 400 && status < 500) {
		success = false;
		log =
			gradient("yellow", "white")("[ CLIENT ERROR ] ") +
			gradient(
				"yellow",
				"white"
			)(`${devMessage}\n${message}\nTime: ${current}`);

		dataBody = null;
	} else {
		success = false;
		log =
			gradient("red", "white")("[ SERVER ERROR ] ") +
			gradient("red", "white")(`${devMessage}\n${message}\nTime: ${current}`);

		dataBody = null;
	}

	var dataModel = {
		meta: {
			success: success,
			message: message,
			devMessage: devMessage,
		},
		body: dataBody,
	};

	console.log(`${log}`);
	return res.status(status).json(dataModel);
};

export default Responser;
