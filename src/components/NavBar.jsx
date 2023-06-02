import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { siegecraftLogo, menu, close } from "../assets";
import styles from "../styles"
import { navLinks } from "../constants";

const NavBar = () => {


    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    const { navLinkStyle, navButtonStyle } = styles

	return (
		<nav className="sticky top-0 z-10 bg-sc-dark-black container min-w-full py-0 font-Catamaran">
			<div className="flex justify-between items-center px-8 py-8">
				<img src={siegecraftLogo} className="h-16" />
				<div className="hidden lg:inline">
					<ul className="flex flex-row space-x-4 items-center">
						{navLinks.map((link) => (
							<li key={link.index} >
								<Link
									to={link.url}
									className={`${navLinkStyle}`}
								>{link.title}</Link>
							</li>
						))}


						<li
							className={`text-sc-off-white bg-sc-red hover:bg-sc-red-dark hover:text-sc-gold text-center text-xl py-4 px-6 rounded font-Cinzel font-bold cursor-pointer`}
						>
							Order Now
						</li>
					</ul>
				</div>
				<div className="lg:hidden">
					<img
						src={mobileNavOpen ? close : menu}
						onClick={() => setMobileNavOpen(!mobileNavOpen)}
						className={`text-sc-off-white ${
							mobileNavOpen ? "h-8 w-8" : "h-10 w-10"
						}  `}
					/>
				</div>
			</div>
			{mobileNavOpen ? (
				<>
					<div className="min-h-screen bg-sc-dark-black w-full inset-0">
						<ul className="flex flex-col gap-6 px-8 text-3xl">
							<li className={navLinkStyle}>Store</li>
							<li className={navLinkStyle}>Elements</li>
							<li className={navLinkStyle}>Cards</li>
							<li className={navLinkStyle}>Blog</li>
							<li className="text-sc-off-white bg-sc-red hover:bg-sc-red-dark hover:text-sc-gold text-center py-4 rounded font-Cinzel font-bold cursor-pointer">
								Order Now
							</li>
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
