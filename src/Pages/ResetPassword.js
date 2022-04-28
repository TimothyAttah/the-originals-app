import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const Recoverpassword = () => {
	const [isPasswordSet, setIsPasswordSet] = React.useState(false);

	const formik = useFormik({
		initialValues: {
			password: "",
			confirmPassword: "",
		},
		validationSchema: Yup.object({
			password: Yup.string()
				.min(8, "Too short")
				.required("Password is required"),
			confirmPassword: Yup.string()
				.min(8, "Too short")
				.required("Password is required"),
		}),
		onSubmit: ({ password, confirmPassword }, { resetForm }) => {
			console.log(password, confirmPassword);
			setIsPasswordSet(true);
			resetForm();
		},
	});

	return (
		<>
			<h2 className="register-heading">
				{isPasswordSet
					? "Password has been reset. Login with your new pass"
					: "Set a new password"}
			</h2>
			<form onSubmit={formik.handleSubmit}>
				<input
					type="password"
					name="password"
					placeholder="Enter new password"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.password}
				/>
				{formik.touched.password && formik.errors.password ? (
					<div className="error">{formik.errors.password}</div>
				) : null}
				<input
					type="password"
					name="confirmPassword"
					placeholder="Confirm new password"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.confirmPassword}
				/>
				{formik.touched.confirmPassword && formik.errors.confirmPassword ? (
					<div className="error">{formik.errors.confirmPassword}</div>
				) : null}
				<div className="submit-action">
					<button type="submit" className="action-btn">
						Submit
					</button>
					<Link to="/register/login">{isPasswordSet ? "Login" : "Cancel"}</Link>
				</div>
			</form>
		</>
	);
};

export default Recoverpassword;
