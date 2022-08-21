import React from "react";
import Image from "next/image";
import { MessageHeader, MessageBody, MessageFooter } from "./index";

const ChatMessage = () => {
	return (
		<div>
			<MessageHeader />
			<MessageBody />
			<MessageFooter />
		</div>
	);
};

export default ChatMessage;
