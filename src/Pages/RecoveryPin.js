import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const Recoverpassword = () => {
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			pin: "",
		},
		validationSchema: Yup.object({
			pin: Yup.string()
				.min(4, "Must be 4 characters")
				.max(4, "Must be 4 characters")
				.required("Required"),
		}),
		onSubmit: ({ pin }, { resetForm }) => {
			console.log(pin);
			navigate("/register/reset-password");
			resetForm();
		},
	});

	return (
		<>
			<h2 className="register-heading">
				A recovery pin has been sent to your email account
			</h2>
			<form onSubmit={formik.handleSubmit}>
				<input
					type="text"
					name="pin"
					placeholder="Enter recovery pin"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.text}
				/>
				{formik.touched.pin && formik.errors.pin ? (
					<div className="error">{formik.errors.pin}</div>
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
