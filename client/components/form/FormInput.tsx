import React from "react";

interface ILoginProps {
	placeholder: string;
	label: string;
	name: string;
	type: string;
	value: string;
	onChange: any;
}
const FormInput = ({
	placeholder,
	label,
	name,
	type,
	value,
	onChange,
}: ILoginProps) => {
	return (
		<div>
			<label htmlFor="" className="block text-purple-200 font-semibold mb-1">
				{label}
			</label>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className="w-full text-sm text-semibold text-white py-2 px-3 rounded-md bg-white focus:ring-0 outline-none border border-white border-opacity-10 shadow-md bg-opacity-10 placeholder:text-gray-300"
			/>
		</div>
	);
};

export default FormInput;
