import React from "react";
import Image from "next/image";

interface IMessage {
	textType?: boolean;
	message: any;
}
const Message = ({ textType, message }: IMessage) => {
	return (
		<div>
			{textType === true ? (
				<span className="w-64 bg-gray-500 bg-opacity-30 rounded-md text-gray-400 text-sm px-2 py-1">
					{message}
				</span>
			) : (
				<div>
					{message}
				</div>
			)}
		</div>
	);
};

export default Message;
