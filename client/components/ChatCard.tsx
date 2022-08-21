import Image from "next/image";
import React from "react";

interface IChatCard {
	name: any;
	time: any;
    image:any;
}

const ChatCard = ( {name,time,image} :IChatCard ) => {
	return (
		<div className="w-80 border-gray-100 flex justify-between items-center p-2 rounded-lg hover:bg-gray-700">
			<div className="flex gap-2">
				<Image
					src={image}
					className="rounded-full"
					alt=""
					width={55}
					height={55}
				/>
				<div className="space-y-1">
					<p className="font-semibold text-gray-300">{name}</p>
					<div className="flex items-center gap-1">
						<Image
							src="/assets/icons/voice.png"
							className=""
							width={28}
							height={20}
						/>
						<p className="text-gray-400 font-semibold text-sm">Voice message</p>
					</div>
				</div>
			</div>
			<div className="text-center">
				<p className="text-gray-400 text-sm">{time}</p>
				<span
					className="bg-purple-600 text-xs rounded-full text-gray-200"
					style={{ padding: "3px 6px" }}
				>
					2
				</span>
			</div>
		</div>
	);
};

export default ChatCard;
