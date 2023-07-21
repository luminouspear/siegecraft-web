import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { footerContent } from "../../constants";
import { Link } from "react-router-dom";
import { siegecraftLogo } from "../../assets";

const scrollToTop = () => window.scrollTo(0, 0);

const FooterSection = () => {
	function getFooterSection(section) {
		const sectionTitle = section.sectionTitle;
		const sectionLinks = section.sectionLinks;
		return (
			<div key={section.index}>
				<h3 className="mt-4 mb-6 uppercase">{sectionTitle}</h3>
				<ul>
					{Object.entries(sectionLinks).map(([key, value]) => (
						<li
							key={key}
							className="mb-4 lg:mb-2 hover:text-sc-gold"
						>
							<Link
								to={{
									pathname: value.locationUrl,
									hash: `${
										value.hash ? value.hash : undefined
									}`,
								}}
								onClick={scrollToTop}
							>
								{value.locationName}
							</Link>
						</li>
					))}
				</ul>
			</div>
		);
	}

	const footer = footerContent.map((header) => getFooterSection(header));

	const currentYear = new Date().getFullYear();

	return (
		<div className="flex flex-col ">
			<div className="flex flex-col items-center w-10/12 lg:mx-auto lg:flex-row">
				<Link
					to="/"
					className="mt-12 cursor-pointer lg:mt-0 lg:pl-32 "
					onClick={scrollToTop}
				>
					<img
						src={siegecraftLogo}
						className="object-contain w-full h-16 xl:h-36"
						alt="Third Dawn: Siegecraft Logo"
					/>
				</Link>
				<div className="flex flex-col w-10/12 py-12 mx-auto text-xl font-thin font-Catamaran text-sc-off-white lg:flex-row justify-evenly lg:w-8/12">
					{footer}
				</div>
			</div>
			<div className="w-full py-4 bg-black">
				<p className="px-8 text-sm text-center text-sc-off-white font-Catamaran">
					© {currentYear} Arcane Arts •{" "}
					<span className="italic font-medium ">
						Third Dawn: Siegecraft
					</span>{" "}
					designed by Dan McCollum & Ben Doeckel • Card art generated
					with Midjourney & Stable Diffusion • All Rights Reserved
				</p>
			</div>
		</div>
	);
};

export default SectionWrapper(FooterSection, "footer", "bg-sc-dark-black");
