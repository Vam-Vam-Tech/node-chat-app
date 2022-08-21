import React from "react";
import Image from "next/image";

const PhotoCard = () => {
	return (
		<div>
			<div className="flex flex-wrap gap-x-2 gap-y-1">
				<div>
					<Image
						src={"/assets/images/cat.png"}
						width={150}
						height={120}
						alt="user"
						className="rounded-md"
					/>
				</div>
				<div>
					<Image
						src={"/assets/images/concert.png"}
						width={130}
						height={120}
						alt="user"
						className="rounded-md"
					/>
				</div>
				<div>
					<Image
						src={"/assets/images/concert.png"}
						width={130}
						height={120}
						alt="user"
						className="rounded-md"
					/>
				</div>
				<div>
					<Image
						src={"/assets/images/cat.png"}
						width={150}
						height={120}
						alt="user"
						className="rounded-md"
					/>
				</div>
			</div>
		</div>
	);
};

export default PhotoCard;
