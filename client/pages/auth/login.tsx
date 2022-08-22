import React, { useState } from "react";
import { FormInput } from "./../../components";

const login = () => {
	// states
	const [values, setValues] = useState({
		username: "",
		password: "",
	});

	const inputs = [
		{
			id: 1,
			name: "username",
			type: "text",
			placeholder: "Username",
			label: "Username",
		},
		{
			id: 2,
			name: "password",
			type: "password",
			placeholder: "Password",
			label: "Password",
		},
	];

	const myStyle = {
		backgroundImage: "url('/assets/images/loginBg.jpg')",
		height: "100vh",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};

	// function
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const onChange = (e) => {
		setValues(e.target.value);
	};
	return (
		<form onSubmit={handleSubmit}>
			<div
				className="w-full h-screen flex justify-center items-center"
				style={myStyle}
			>
				<div className="w-1/4 backdrop-blur-sm border border-white border-opacity-10 shadow-md bg-white bg-opacity-10 py-7 px-4 rounded-md space-y-3">
					<div className=" text-center mb-5">
						<p className="text-indigo-100 font-bold text-2xl">Login</p>
						<p className="text-sm text-gray-300">Please enter your details.</p>
					</div>
					{inputs.map((input) => (
						<FormInput
							key={input.id}
							value={values[input.name]}
							type={input.type}
							name={input.name}
							placeholder={input.placeholder}
							label={input.label}
							onChange={onChange}
						/>
					))}
					<button className="w-full bg-purple-600 py-2 px-3 rounded-md text-gray-300 text-bold">
						Login
					</button>
					<span className="text-white text-sm block text-center mt-3">
						Not a member?{" "}
						<a href="" className="underline hover:text-purple-200">
							Sign up now
						</a>
					</span>
				</div>
			</div>
		</form>
	);
};

export default login;
