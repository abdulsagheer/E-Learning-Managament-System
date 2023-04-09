"use client";

import { UserDetails } from "@/interfaces/interfaces";
import React, { useState } from "react";

const Register = () => {
	const [data, setData] = useState<UserDetails>({
		name: "",
		email: "",
		password: "",
	});

	const handleInputChange = (e: any) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(data.name, data.email, data.password);
	};

	return (
		<>
			<h1 className="jumbotron text-center bg-primary square">Register</h1>

			<div className="container col-md-4 offset-md-4 pb-5">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						className="form-control mb-4 p-4"
						value={data.name}
						onChange={handleInputChange}
						placeholder="Enter name"
						required
					/>

					<input
						type="email"
						className="form-control mb-4 p-4"
						value={data.email}
						onChange={handleInputChange}
						placeholder="Enter email"
						required
					/>

					<input
						type="password"
						className="form-control mb-4 p-4"
						value={data.password}
						onChange={handleInputChange}
						placeholder="Enter password"
						required
					/>

					<button type="submit" className="btn btn-block btn-primary">
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default Register;
