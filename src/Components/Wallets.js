import React from "react";
import metamask from "../images/metamask.webp";
import coinbase from "../images/walletlink.webp";
import walletconnect from "../images/walletconnect.webp";
import phantom from "../images/phantom.svg";
import fortmatic from "../images/fortmatic.webp";
import kaikas from "../images/kaikas.webp";
import bitski from "../images/bitski.webp";
import glow from "../images/glow.webp";

const Wallets = ({ showMore, setShowMore }) => {
	return (
		<>
			<div className="wallets ">
				<div>
					<div className="flex-wallet">
						<img
							src={metamask}
							alt="metamask-altenative"
							width="24px"
							height="24px"
						/>{" "}
						<div className="wallet-name">MetaMask</div>
					</div>
				</div>
				<div>
					<div className="flex-wallet">
						<img src={coinbase} alt="coinbase-alt" width="24px" height="24px" />{" "}
						<div className="wallet-name">Coinbase Wallet</div>
					</div>
					<button className="action-btn">Popular</button>
				</div>
				<div>
					<div className="flex-wallet">
						<img
							src={walletconnect}
							alt="walletconnect-alt"
							width="24px"
							height="24px"
						/>
						<div className="wallet-name">WalletConnect</div>
					</div>
				</div>
				<div>
					<div className="flex-wallet">
						<img
							src={phantom}
							alt="phantom-altenative"
							width="24px"
							height="24px"
						/>{" "}
						<div className="wallet-name">Phantom</div>
					</div>
					<button className="action-btn popular-two">Popular</button>
				</div>
				<div style={{ display: !showMore && "none" }}>
					<div className="flex-wallet">
						<img
							src={fortmatic}
							alt="fortmatic-altenative"
							width="24px"
							height="24px"
						/>{" "}
						<div className="wallet-name">Fortmatic</div>
					</div>
				</div>
				<div style={{ display: !showMore && "none" }}>
					<div className="flex-wallet">
						<img
							src={kaikas}
							alt="kaikas-altenative"
							width="24px"
							height="24px"
						/>{" "}
						<div className="wallet-name">Kaikas</div>
					</div>
				</div>
				<div style={{ display: !showMore && "none" }}>
					<div className="flex-wallet">
						<img
							src={bitski}
							alt="bitski-altenative"
							width="24px"
							height="24px"
						/>{" "}
						<div className="wallet-name">Bitski</div>
					</div>
				</div>
				<div style={{ display: !showMore && "none" }}>
					<div className="flex-wallet">
						<img src={glow} alt="glow-altenative" width="24px" height="24px" />{" "}
						<div className="wallet-name">Glow</div>
					</div>
				</div>
			</div>
			<div className="more-wallets" onClick={() => setShowMore(!showMore)}>
				{showMore ? "View Less Options" : "View More Options"}
			</div>
		</>
	);
};

export default Wallets;
