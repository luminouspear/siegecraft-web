import React, { useState } from "react";
import { Link } from "react-router-dom";
import { siegecraftLogo, menu, close } from "../../assets";
import styles from "../../styles";
import { navLinks } from "../../constants";

const NavBar = () => {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const { navLinkStyle, navButtonStyle } = styles;

	const links = navLinks.map((link) => (
		<li key={link.index} className="flex justify-center w-full mx-auto text-center lg:block lg:w-auto">
			<Link
				to={link.url}
				className={`${navLinkStyle}`}
				onClick={() => setMobileNavOpen(false)}
			>
				{link.title}
			</Link>
		</li>
	));

	return (
		<nav className="container sticky top-0 z-[100] min-w-full py-0 bg-sc-dark-black font-Catamaran">
			<div className="flex items-center justify-between px-8 py-8 lg:py-4">
				<Link
					to="/"
					className="cursor-pointer"
					onClick={() => {
						window.scrollTo(0, 0)
						setMobileNavOpen(false)
					}}
				>
					<img
						src={siegecraftLogo}
						className="object-cover h-12 max-w-full xl:h-16"
						alt="Third Dawn: Siegecraft Logo"
					/>
				</Link>
				<div className="hidden lg:inline">
					<ul className="flex flex-row items-center space-x-4 xl:space-x-6">
						{links}
{/*
						<li
							className={`text-sc-off-white bg-sc-red hover:bg-sc-red-dark hover:text-sc-gold text-center text-xl py-4 px-6 rounded font-Cinzel font-bold cursor-pointer`}
						>
							Order Now
						</li> */}
					</ul>
				</div>
				<button
					className="lg:hidden"
					onClick={() => setMobileNavOpen(!mobileNavOpen)}
					taborder="0"
					aria-controls="primary-navigation"
					aria-expanded={mobileNavOpen}
				>
					<img
						src={mobileNavOpen ? close : menu}
						className={`text-sc-off-white ${
							mobileNavOpen ? "h-8 w-8" : "h-10 w-10"
						}  `}
						aria-hidden="true"
					/>
					{/* <span className="invisible">Menu</span> */}
				</button>
			</div>
			{mobileNavOpen ? (
				<>
					<div
						className="inset-0 w-full min-h-screen bg-sc-dark-black lg:hidden"
						id="primary-navigation"
					>
						<ul className="flex flex-col items-center justify-center w-full mt-12 text-3xl ">
							{links}
							{/* <li className="px-12 py-4 mx-auto my-4 font-bold text-center rounded cursor-pointer text-sc-off-white bg-sc-red hover:bg-sc-red-dark hover:text-sc-gold font-Cinzel">
								Order Now
							</li> */}
						</ul>
					</div>
				</>
			) : (
				<></>
			)}
		</nav>
	);
};

export default NavBar;
