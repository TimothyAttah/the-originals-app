/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { BsGoogle, SiBitcoinsv } from "react-icons/all";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = ({ setShowConnect }) => {
	const formik = useFormik({
		initialValues: {
			userName: "",
			password: "",
		},
		validationSchema: Yup.object({
			userName: Yup.string()
				.min(4, "Name is too short")
				.max(25, "Must be 25 characters or less")
				.required("Required"),
			password: Yup.string()
				.min(8, "Too short")
				.required("Password is required"),
		}),
		onSubmit: ({ userName, password }, { resetForm }) => {
			console.log(userName, password);

			resetForm();
		},
	});

	return (
		<>
			<form onSubmit={formik.handleSubmit}>
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
						Login
					</button>
					<Link to="/register/recovery-email">Forgot Password?</Link>
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

export default Login;
