import React from "react";
import Image from "next/image";

interface IMessage {
	text:any;
}
const Message = ({text}:IMessage) => {
	return (
		<div>
			<span className="w-64 bg-gray-500 bg-opacity-30 rounded-md text-gray-400 text-sm px-2 py-1">
				{text}
			</span>
		</div>
	);
};

export default Message;
