import React from "react";
import Image from "next/image";
import Message from "./Message";

interface IReceiveMessage {
	message: any;
}
const ReceiveMessage = ({ message }: IReceiveMessage) => {
	return (
		<div className="flex items-center justify-start gap-3">
			<Image
				src={"/assets/users/user4.png"}
				className="rounded-full"
				alt="user"
				width={50}
				height={50}
			/>
			<div className="">
				<p className="text-gray-400 text-sm font-semibold mb-1 ml-0.5">
					Lisa <span className="ml-1 mb-1 text-xs font-normal">11:11</span>
				</p>
				<Message text={message} />
			</div>
		</div>
	);
};

export default ReceiveMessage;
