import React from "react";
import { VideoCard } from "../..";

const ShareVideo = () => {
	return (
		<div>
			<div className="flex items-center justify-between pr-5 mb-2">
				<p className="text-gray-400 font-bold">
					Shared Videos <span className="font-semibold text-sm">158</span>
				</p>
				<p className="text-gray-400 text-sm">See All</p>
			</div>
			<VideoCard />
		</div>
	);
};

export default ShareVideo;
