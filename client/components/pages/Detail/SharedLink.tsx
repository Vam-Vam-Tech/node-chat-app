import React from "react";
import { LinkCard } from "../../../components";

const SharedLink = () => {
	return (
		<div>
			<div className="flex items-center justify-between pr-5 mb-1">
				<p className="text-gray-400 font-bold">
					Shared Links <span className="font-semibold text-sm">125</span>
				</p>
				<p className="text-gray-400 text-sm">See All</p>
			</div>
			<LinkCard />
		</div>
	);
};

export default SharedLink;
