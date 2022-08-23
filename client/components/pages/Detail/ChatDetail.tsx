import React from "react";
import { DetailHeader, SharedPhoto, ShareVideo, SharedLink } from "./index";

const ChatDetail = () => {
	return (
		<div className="py-2 px-3 space-y-2">
			<DetailHeader />
			<SharedPhoto />
			<ShareVideo />
			<SharedLink />
		</div>
	);
};

export default ChatDetail;
