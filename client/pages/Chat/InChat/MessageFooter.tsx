import TextField from "../../../components/TextField";
import { MicrophoneIcon, PaperClipIcon } from "@heroicons/react/outline";
import React from "react";

const MessageFooter = () => {
	const icons = {
		messageIcon: <PaperClipIcon className="w-6 h-6 text-gray-300" />,
		micIcon: <MicrophoneIcon className="w-6 h-6 text-gray-300" />,
	};
	return (
		<div className="flex gap-3 px-4">
			<div className="w-11/12">
				<TextField placeholder="Message" icon={icons.messageIcon} />
			</div>
			<span className="w-10 flex items-center justify-center rounded-md bg-white bg-opacity-30">
				{icons.micIcon}
			</span>
		</div>
	);
};

export default MessageFooter;
