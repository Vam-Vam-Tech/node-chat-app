import React from "react";
import Image from "next/image";
import MessageHeader from "./MessageHeader";
import MessageDetail from "./MessageDetail";

const ChatMessage = () => {
	return (
    <div>
      <MessageHeader/>
      <MessageDetail/>
    </div>
	);
};

export default ChatMessage;
