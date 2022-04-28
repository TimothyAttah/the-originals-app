import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const Recoverpassword = () => {
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: Yup.object({
			email: Yup.string().email("Invalid email address").required("Required"),
		}),
		onSubmit: ({ email }, { resetForm }) => {
			console.log(email);
			navigate("/register/recovery-pin");
			resetForm();
		},
	});

	return (
		<>
			<h2 className="register-heading">Enter your email to recover</h2>
			<form onSubmit={formik.handleSubmit}>
				<input
					type="email"
					name="email"
					placeholder="Enter email to recover"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
				/>
				{formik.touched.email && formik.errors.email ? (
					<div className="error">{formik.errors.email}</div>
				) : null}
				<div className="submit-action">
					<button type="submit" className="action-btn">
						Submit
					</button>
					<Link to="/register/login">Cancel</Link>
				</div>
			</form>
		</>
	);
};

export default Recoverpassword;
