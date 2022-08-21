import React from "react";
import Image from "next/image";
import Message from "./Message";

interface IReceiveMessageProps {
	messageType: any;
	message: any;
}
const ReceiveMessage = ({ messageType, message }: IReceiveMessageProps) => {
	return (
		<div className="flex items-start justify-start gap-3">
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
				{messageType === "text" ? (
					<Message textType={true} message={message} />
				) : (
					<Message textType={false} message={message} />
				)}
			</div>
		</div>
	);
};

export default ReceiveMessage;
