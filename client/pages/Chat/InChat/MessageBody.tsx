import React from "react";
import Image from "next/image";
import {SentMessage, ReceiveMessage, TextField} from "../../../components";

const items = {
    message1:{
        value:"Hey! How's going ?"
    },
    message2:{
        value:"I'm getting well, I saw your story, btw still there?"
    },
    message3:{
        value: <Image src={"/assets/images/concert.png"} width={300} height={200} alt="user" className="rounded-md"/>
    },
    message4:{
        value:"Oh! Very Cool.. a ynn mite ny b"
    },
    message5:{
        value:"Okiee...good"
    },
}

const MessageBody = () => {
	return (
		<div className="space-y-2 p-3 px-5">
			<ReceiveMessage messageType={"text"} message={items.message1.value}/>
            <SentMessage messageType={"text"} message={items.message2.value}/>
            <ReceiveMessage messageType={"photo"} message={items.message3.value}/>
            <SentMessage messageType={"text"} message={items.message4.value}/>
            <ReceiveMessage messageType={"text"} message={items.message5.value}/>
		</div>
	);
};

export default MessageBody;
