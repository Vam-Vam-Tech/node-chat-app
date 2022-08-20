import ChatCard from "../../components/ChatCard";
import React from "react";

const chatitems = [
	{
		name: "Berry",
		time: "11:20",
        image: "/assets/users/user1.png"
	},
	{
		name: "Sa Sa",
		time: "11:30",
        image: "/assets/users/user2.png"
	},
    {
        name: "Jennie",
        time: "11:11",
        image: "/assets/users/user3.png"
    },
    {
        name: "Lisa",
        time: "12:41",
        image: "/assets/users/user4.png"
    },
    {
        name: "Jisoo",
        time: "08:11",
        image: "/assets/users/user1.png"
    },
    {
        name: "Rose",
        time: "12:23",
        image: "/assets/users/user2.png"
    }
];

const Chat = () => {
	return (
		<div className="space-y-2">
            <p className="text-gray-400 text-sm">Messages <i></i></p>
			{chatitems.map((item: any, index: number) => {
				return (
					<ChatCard key={index} name={item.name} time={item.time} image={item.image} />
				);
			})}
		</div>
	);
};

export default Chat;
