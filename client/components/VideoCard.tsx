import React from "react";
import Image from "next/image";

const VideoCard = () => {
	return (
		<div>
			<div className="flex gap-2">
				<Image
					src={"/assets/images/cat.png"}
					width={130}
					height={90}
					alt="user"
					className="rounded-md"
				/>
				<Image
					src={"/assets/images/cat.png"}
					width={130}
					height={90}
					alt="user"
					className="rounded-md"
				/>
			</div>
		</div>
	);
};

export default VideoCard;
