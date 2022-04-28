import React, { useState } from "react";

import Wallets from "./Wallets";

const Connect = ({ showConnect, setShowConnect }) => {
	const [showMore, setShowMore] = useState(false);

	const handleClick = (e) => {
		const desiredClass = e.target.classList;
		if (desiredClass.contains("modal-overlay")) {
			setShowConnect(false);
		}
	};

	return (
		<div
			className={`modal-overlay ${showConnect ? null : " hide-modal"}`}
			onClick={handleClick}
		>
			<article className={`wallet-modal ${showConnect ? null : "hide-wallet"}`}>
				<p>
					You need an <span style={{ color: "#fed700" }}>Ethereum wallet</span>{" "}
					to use Originals
				</p>
				<p className="small" style={{ marginLeft: 0 }}>
					Connect with one of our available wallet providers or create a new
					one.
				</p>
				<Wallets showMore={showMore} setShowMore={setShowMore} />
				<button
					className=" action-btn close-modal"
					onClick={() => setShowConnect(false)}
				>
					close
				</button>
			</article>
		</div>
	);
};

export default Connect;
