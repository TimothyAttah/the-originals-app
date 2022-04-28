/** @format */

import React from "react";
import { BsGoogle, SiBitcoinsv } from "react-icons/all";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signup = ({ setShowConnect }) => {
	const formik = useFormik({
		initialValues: {
			fullName: "",
			userName: "",
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			fullName: Yup.string()
				.min(2, "Name is too short")
				.max(25, "Must be 25 characters or less")
				.required("Required"),
			userName: Yup.string()
				.min(4, "Name is too short")
				.max(25, "Must be 25 characters or less")
				.required("Required"),
			email: Yup.string().email("Invalid email address").required("Required"),
			password: Yup.string()
				.min(8, "Too short")
				.required("Password is required"),
		}),
		onSubmit: ({ fullName, userName, password, email }, { resetForm }) => {
			resetForm();
		},
	});

	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<input
					type="text"
					name="fullName"
					placeholder="Full Name"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.fullName}
				/>
				{formik.touched.fullName && formik.errors.fullName ? (
					<div className="error">{formik.errors.fullName}</div>
				) : null}
				<input
					type="text"
					name="userName"
					placeholder="User Name"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.userName}
				/>
				{formik.touched.userName && formik.errors.userName ? (
					<div className="error">{formik.errors.userName}</div>
				) : null}
				<input
					type="email"
					name="email"
					placeholder="Email"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
				/>
				{formik.touched.email && formik.errors.email ? (
					<div className="error">{formik.errors.email}</div>
				) : null}
				<input
					type="password"
					name="password"
					placeholder="Password"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.password}
				/>
				{formik.touched.password && formik.errors.password ? (
					<div className="error">{formik.errors.password}</div>
				) : null}
				<div className="submit-action">
					<button type="submit" className="action-btn">
						Register
					</button>
				</div>
			</form>
			<div className="login-alt">
				<div className="heading">
					<div></div>
					<div>OR</div>
					<div></div>
				</div>
				<p>Login with</p>
				<div className="icons">
					<div className="icon">
						{" "}
						<BsGoogle />{" "}
					</div>
					<div className="icon" onClick={() => setShowConnect(true)}>
						{" "}
						<SiBitcoinsv />{" "}
					</div>
				</div>
			</div>
		</>
	);
};

export default Signup;
