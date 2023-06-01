import React, { useState, useEffect } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import {
	homePageSectionTitles,
	elementsCarouselContent,
} from "../../constants";

import { iconCaret, cardBack } from "../../assets";

const ElementsCarousel = () => {
	const [currentTab, setCurrentTab] = useState(0);
	const [currentSectionTitle, setCurrentSectionTitle] = useState(
		elementsCarouselContent[0].contentTitle
	);
	const [currentSectionSubTitle, setCurrentSectionSubTitle] = useState(
		elementsCarouselContent[0].contentSubtitle
	);
	const [currentSectionImage, setCurrentSectionImage] = useState(
		elementsCarouselContent[0].image
	);
	const [currentSectionImageAlt, setCurrentSectionImageAlt] = useState(
		elementsCarouselContent[0].imageAlt
	);

	useEffect(() => {
		console.log(currentTab);
		setCurrentSectionTitle(
			elementsCarouselContent[currentTab].contentTitle
		);
		setCurrentSectionSubTitle(
			elementsCarouselContent[currentTab].contentSubtitle
		);
		setCurrentSectionImage(elementsCarouselContent[currentTab].image);
		setCurrentSectionImageAlt(elementsCarouselContent[currentTab].imageAlt);
		console.log(currentSectionTitle, currentSectionSubTitle);
	}, [currentTab]);

	return (
		<div className="">
			<div className=" pt-24 w-10/12 md:max-w-2xl md:w-full mx-auto ">
				<h2
					className="text-4xl font-Cinzel font-medium text-center md:w-1/2 mx-auto pb-8 text-sc-off-white"
					dangerouslySetInnerHTML={{
						__html: homePageSectionTitles[1].title,
					}}
				/>
				<p className="text-center text-sc-off-white font-Catamaran w-8/12 mx-auto">
					{homePageSectionTitles[1].subTitle}
				</p>
			</div>

			<div className="grid span-1 grid-cols-3 grid-rows-2 gap-2 md:grid-cols-12 md:grid-rows-1 min-w-full md:w-11/12 md:px-12 md:gap-4 lg:w-10/12 mx-auto px-2 pt-8 ">
				{elementsCarouselContent.map((content) => (
					<div
						key={content.index}
						className={`p-6 col-span-1 md:col-span-2  md:w-full mx-auto  rounded-lg cursor-pointer  ${
							currentTab === content.index
								? "bg-sc-off-white-50"
								: "hover:bg-sc-off-white/10"
						}`}
						onClick={() => setCurrentTab(content.index)}
					>
						<div className="flex flex-col gap-4 justify-center items-center">
							<img
								src={content.icon}
								alt={content.iconAlt}
								className="fill-sc-off-white h-12 drop-shadow-lg mx-auto"
							/>
							<h3 className="font-Cinzel md:text-lg xl:text-2xl text-sc-off-white text-2xl mx-auto drop-shadow-lg">
								{content.name}
							</h3>
						</div>
					</div>
				))}
			</div>
			<div className="mx-4 mt-4">
				<div className="w-full h-px bg-sc-off-white/50" />
			</div>
			<div className="flex flex-row container lg:w-10/12 2xl:w-8/12 mx-auto px-6 justify-center items-center">
				<div className="p-4 cursor-pointer  w-1/12">
					<img
						src={iconCaret}
						className={`h-4 rotate-180 ${
							currentTab === 0 ? "opacity-40" : "opacity-100"
						} `}
						onClick={() => setCurrentTab((currentTab - 1) % 6)}
					/>
				</div>
				<div className="flex flex-col md:flex-row w-10/12  mx-auto">
					<div className="md:w-1/2 w-full  p-6 relative isolate">
						<img src={cardBack} className="rounded-lg -rotate-3 w-11/12 h-auto" />
						<img
							src={currentSectionImage}
							className="rounded-xl absolute inset-0 w-10/12 translate-x-10 rotate-1 translate-y-8"
						/>
					</div>
					<div className="md:w-1/2 w-full p-6 md:flex md:flex-col md:justify-center md:items-center">
						<h3 className="text-2xl font-Cinzel text-sc-off-white w-10/12 pt-8">
							{currentSectionTitle}
						</h3>
						<p className="text-lg font-Catamaran text-sc-off-white w-10/12 pt-4">
							{currentSectionSubTitle
								.split("<br />")
								.map((line, index) => (
									<span key={index}>
										{line}
										<br />
										<br />
									</span>
								))}
                        </p>
                        <a href="#" className="font-Cinzel text-2xl font-medium hover:text-sc-gold text-sc-off-white px-8 py-4 rounded border-2 hover:border-sc-gold border-sc-off-white">Learn More</a>
					</div>
				</div>
				<div className="p-4 cursor-pointer w-1/12  flex justify-end">
					<img
						src={iconCaret}
						className={`h-4 ${
							currentTab === 5 ? "opacity-40" : "opacity-100"
						}`}
						onClick={() => setCurrentTab((currentTab + 1) % 6)}
					/>
				</div>
			</div>
		</div>
	);
};

export default SectionWrapper(ElementsCarousel, "elements", "bg-sc-dark-black");
