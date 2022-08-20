import React from "react";
import Image from "next/image";
import Message from "../../components/Message";
import SentMessage from "../../components/SentMessage";
import ReceiveMessage from "../../components/ReceiveMessage";

const message = {
    message1:{
        type: "text",
        value:"Hey! How's going ?"
    },
    message2:{
        type: "text",
        value:"I'm getting well, I saw your story, btw still there?"
    },
    message3:{
        type: "photo",
        value: <Image src={"/assets/images/concert.png"} width={200} height={80} alt="user"/>
    }
}

const MessageDetail = () => {
	return (
		<div className="space-y-2 p-3 px-5">
			<ReceiveMessage message={message.message1.type === "text" ? message.message1.value : ""}/>
            <SentMessage  message={message.message2.type === "text" ? message.message2.value : ""}/>
            <ReceiveMessage message={message.message3.type === "photo" ? message.message3.value : ""}/>
		</div>
	);
};

export default MessageDetail;
