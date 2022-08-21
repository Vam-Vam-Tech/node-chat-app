import React from "react";
import Image from "next/image";
import Message from "./Message";

interface ISentMessageProps {
	messageType: any;
	message: any;
}
const SentMessage = ({ messageType,message }: ISentMessageProps) => {
	return (
		<div>
			<div className="flex items-start gap-3 justify-end">
				<div className="flex flex-col items-end">
					<p className="text-gray-400 text-sm font-semibold mb-1 ml-0.5">
						Me <span className="ml-1 mb-1 text-xs font-normal">11:11</span>
					</p>
					<div className="space-y-1">
						{messageType === "text" ? (
							<Message textType={true} message={message} />
						) : (
							<Message textType={false} message={message} />
						)}
					</div>
				</div>
				<Image
					src={"/assets/users/user4.png"}
					className="rounded-full"
					alt="user"
					width={50}
					height={50}
				/>
			</div>
		</div>
	);
};

export default SentMessage;
