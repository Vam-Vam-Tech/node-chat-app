import { BellIcon, XIcon, UserCircleIcon, BookmarkIcon, InformationCircleIcon } from "@heroicons/react/outline";
import React from "react";

const DetailHeader = () => {
	const icons = [
		{
			icon: <BellIcon className="w-6 h-6 text-gray-200" />,
		},
		{
			icon: <UserCircleIcon className="w-6 h-6 text-gray-200" />,
		},
        {
            icon: <UserCircleIcon className="w-6 h-6 text-gray-200" />,
		},
        {
            icon: <InformationCircleIcon className="w-6 h-6 text-gray-200" />,
        },
	];
	return (
		<div className="space-y-2">
			<div className="flex justify-between pr-5">
				<p className="font-bold text-gray-400">Chat Details</p>
				<XIcon className="w-5 h-5 text-gray-200" />
			</div>
			<div className="flex gap-6">
				{icons.map((item: any, index: number) => {
					return (
						<div
							key={index}
							className="w-14 h-12 flex items-center justify-center bg-white bg-opacity-10 rounded-lg"
						>
							{item.icon}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default DetailHeader;
