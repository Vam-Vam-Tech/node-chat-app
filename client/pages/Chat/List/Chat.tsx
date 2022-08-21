import ChatCard from "../../../components/ChatCard";
import React from "react";
import {
	ChevronDownIcon,
	PlusIcon,
	SearchIcon,
} from "@heroicons/react/outline";
import TextField from "../../../components/TextField";
import { PreviewAvatar } from "../../../components";

const Chat = () => {
	const chatitems = [
		{
			name: "Berry",
			time: "11:20",
			image: "/assets/users/user1.png",
		},
		{
			name: "Sa Sa",
			time: "11:30",
			image: "/assets/users/user2.png",
		},
		{
			name: "Jennie",
			time: "11:11",
			image: "/assets/users/user3.png",
		},
		{
			name: "Lisa",
			time: "12:41",
			image: "/assets/users/user4.png",
		},
		{
			name: "Jisoo",
			time: "08:11",
			image: "/assets/users/user1.png",
		},
		{
			name: "Luu Luu",
			time: "12:23",
			image: "/assets/users/user2.png",
		},
		{
			name: "Choco",
			time: "12:23",
			image: "/assets/users/user2.png",
		},
	];
	const icons = {
		searchIcon: <SearchIcon className="w-6 h-6 text-gray-400" />,
	};
	return (
		<div className="px-2 pl-3 py-4">
			<div className="px-2 mb-3">
				<TextField icon={icons.searchIcon} placeholder={"Search"} />
			</div>
			<div>
				<PreviewAvatar />
			</div>
			<div>
				<div className="flex justify-between text-gray-400">
					<div className="flex items-center mb-2">
						<p className="text-sm px-2">Messages</p>
						<ChevronDownIcon className="w-5 h-5" />
					</div>
					<div>
						<PlusIcon className="w-5 h-5" />
					</div>
				</div>
				<div
					className="overflow-y-scroll preview"
					style={{ height: "430px" }}
				>
					{chatitems.map((item: any, index: number) => {
						return (
							<ChatCard
								key={index}
								name={item.name}
								time={item.time}
								image={item.image}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Chat;
