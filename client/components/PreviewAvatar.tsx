import React from "react";
import Image from "next/image";

const images = [
	{
		image: "/assets/users/user1.png",
	},
	{
		image: "/assets/users/user2.png",
	},
	{
		image: "/assets/users/user3.png",
	},
	{
		image: "/assets/users/user4.png",
	},
	
];
const PreviewAvatar = () => {
	return (
		<div className="flex gap-3 overflow-x-scroll px-2 preview">
			{images.map((item, index) => {
				return (
					<div key={index}>
						<Image
							src={item.image}
							className="rounded-full"
							alt=""
							width={60}
							height={60}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default PreviewAvatar;
