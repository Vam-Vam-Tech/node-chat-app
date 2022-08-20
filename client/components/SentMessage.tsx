import React from "react";
import Image from "next/image";
import Message from "./Message";

interface ISentMessage{
    message: any;
}
const SentMessage = ({message}:ISentMessage) => {
	return (
		<div>
			<div className="flex items-center gap-3 justify-end">
				<div className="flex flex-col items-end">
					<p className="text-gray-400 text-sm font-semibold mb-1 ml-0.5">
						Lisa <span className="ml-1 mb-1 text-xs font-normal">11:11</span>
					</p>
					<div className="space-y-1">
						<Message text={message}/>
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
