import React from "react";
import Image from "next/image";

const MessageHeader = () => {
	return (
		<div>
			<div className="p-3">
				<div className="flex items-center gap-2 border-b-2 border-b-purple-400 border-opacity-30">
					<div className="relative">
						<Image
							src={"/assets/users/user4.png"}
							className="rounded-full"
							alt="user"
							width={60}
							height={60}
						/>
						<div className="w-3.5 h-3.5 bg-green-500 rounded-full absolute left-11 bottom-2 border border-gray-500"></div>
					</div>
					<div>
						<p className="text-gray-400">Lisa</p>
						<p className="text-gray-400 text-sm">Active Now</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MessageHeader;
