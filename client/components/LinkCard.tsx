import React from "react";
import Image from "next/image";

const LinkCard = () => {
	return (
		<div>
			<div className="space-y-1">
				<div className="flex items-center gap-2">
					<div className="bg-purple-500 bg-opacity-50 w-9 h-9 p-1 rounded-md">
						<Image
							src={"/assets/images/spotify.png"}
							width={40}
							height={40}
							alt="user"
							className="rounded-md"
						/>
					</div>
					<div>
						<p className="text-xs text-gray-200 font-semibold">Spotify</p>
						<p className="text-xs text-gray-400">https://www.spotify.com</p>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<div className="bg-purple-500 bg-opacity-50 w-9 h-9 p-1 rounded-md">
						<Image
							src={"/assets/images/github.png"}
							width={40}
							height={40}
							alt="user"
							className="rounded-md"
						/>
					</div>
					<div>
						<p className="text-xs text-gray-200 font-semibold">Github</p>
						<p className="text-xs text-gray-400">https://www.github.com</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LinkCard;
