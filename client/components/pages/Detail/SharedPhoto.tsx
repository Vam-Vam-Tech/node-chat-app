import React from "react";
import { PhotoCard } from "../../../components";

const SharedPhoto = () => {
	return (
		<div>
			<div className="flex items-center justify-between pr-5 mb-2">
				<p className="text-gray-400 font-bold">
					Shared Photo <span className="font-semibold text-sm">107</span>
				</p>
				<p className="text-gray-400 text-xs">See All</p>
			</div>
			<PhotoCard />
		</div>
	);
};

export default SharedPhoto;
