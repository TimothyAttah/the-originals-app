import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Register = () => {
	const { pathname } = useLocation();

	return (
		<section className="register">
			<div className="bg-art"></div>
			<article className="register-lg">
				<div className="logo">
					<span style={{ color: "#de3163" }}>Lo</span>{" "}
					<span style={{ color: "#3498db" }}>go</span>
				</div>
				<p className="main">
					Get more things done with{" "}
					<span style={{ color: "#FED700" }}>Loggin</span> platform.
				</p>
				<p className="small">
					Access to the most powerfull tool in the entire design and web
					industry.
				</p>
				<nav>
					<Link
						to="login"
						className={pathname === "/register/login" ? "current" : null}
					>
						Login{" "}
					</Link>
					<Link
						to="signup"
						className={pathname === "/register/signup" ? "current" : null}
					>
						Register{" "}
					</Link>
				</nav>
				<Outlet />
			</article>
		</section>
	);
};

export default Register;
