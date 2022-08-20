import React from "react";

interface ITextFieldProps {
	icon?: any;
  placeholder: string;
}

const TextField = ({ icon,placeholder }: ITextFieldProps) => {
	return (
		<div className="relative">
			<span className="absolute top-2 left-3">
				{icon}
			</span>
			<input
				type="text"
				className="w-full bg-white bg-opacity-30 outline-none px-4 py-2 pl-10 text-gray-300 rounded-lg"
        placeholder={placeholder}
			/>
		</div>
	);
};

export default TextField;
