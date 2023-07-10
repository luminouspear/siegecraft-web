import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "../hoc/SectionWrapper";
import {
	homePageSectionTitles,
	elementsCarouselContent,
} from "../../constants";
import { useSwipeable } from "react-swipeable";
import { iconCaret, cardBack } from "../../assets";

const HomePageElementsCarousel = () => {
	const [currentSectionTitle, setCurrentSectionTitle] = useState(
		elementsCarouselContent[0].contentTitle
	);
	const [currentSectionSubTitle, setCurrentSectionSubTitle] = useState(
		elementsCarouselContent[0].contentSubtitle
	);
	const [currentSectionImage, setCurrentSectionImage] = useState(null);
	const [currentSectionImageAlt, setCurrentSectionImageAlt] = useState(
		elementsCarouselContent[0].imageAlt
	);
	const [currentTab, setCurrentTab] = useState(0);
	const [currentElement, setCurrentElement] = useState(
		elementsCarouselContent[0].name.toLowerCase()
	);

	useEffect(() => {
		elementsCarouselContent[currentTab].image().then((module) => {
			setCurrentSectionImage(module.default);
		});
		setCurrentSectionTitle(
			elementsCarouselContent[currentTab].contentTitle
		);
		setCurrentSectionSubTitle(
			elementsCarouselContent[currentTab].contentSubtitle
		);
		setCurrentSectionImageAlt(elementsCarouselContent[currentTab].imageAlt);
		setCurrentElement(
			elementsCarouselContent[currentTab].name.toLowerCase()
		);
	}, [currentTab]);

	const handleSwipe = (direction) => {
		switch (direction) {
			case "back":
				setCurrentTab((currentTab - 1 + 6) % 6);
				return;
			case "forward":
				setCurrentTab((currentTab + 1) % 6);
				return;
			default:
				setCurrentTab(direction);
				return;
		}
	};

	const swipeHandlers = useSwipeable({
		onSwipedLeft: () => handleSwipe("back"),
		onSwipedRight: () => handleSwipe("forward"),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});

	return (
		<>
			<div className="w-10/12 pt-24 mx-auto md:max-w-2xl md:w-full">
				<h2
					className="pb-8 mx-auto text-4xl font-medium text-center font-Cinzel md:w-1/2 lg:w-full text-sc-off-white"
					dangerouslySetInnerHTML={{
						__html: homePageSectionTitles[1].title,
					}}
				/>
				<p
					className="w-8/12 mx-auto text-2xl text-center text-sc-off-white font-Catamaran lg:w-full lg:pb-12"
					dangerouslySetInnerHTML={{
						__html: homePageSectionTitles[1].subTitle,
					}}
				></p>
			</div>

			<div className="grid min-w-full grid-cols-6 grid-rows-2 gap-1 px-4 pt-8 mx-auto span-1 gap-y-2 md:grid-cols-12 md:grid-rows-1 lg:gap-2 md:min-w-0 md:w-11/12 md:px-4 lg:w-10/12 xl:w-10/12 2xl:w-8/12 md:gap-4 lg:px-16 xl:px-36 sm:px-8 ">
				{elementsCarouselContent.map((content) => (
					<div
						key={content.index}
						className={`p-6 col-span-2  md:w-full mx-auto  w-full rounded-lg cursor-pointer  ${
							currentTab === content.index
								? "bg-sc-off-white-50"
								: "hover:bg-sc-off-white/10"
						}`}
						onClick={() => handleSwipe(content.index)}
					>
						<div className="flex flex-col items-center justify-center space-y-2 lg:space-y-4">
							<img
								src={content.icon}
								alt={content.iconAlt}
								className="h-12 mx-auto fill-sc-off-white drop-shadow-lg"
							/>
							<h3 className="text-base font-Cinzel md:text-lg xl:text-2xl text-sc-off-white sm:text-xl drop-shadow-lg">
								{content.name}
							</h3>
						</div>
					</div>
				))}
			</div>
			<div className="mx-4 mt-4 lg:mx-16 xl:mx-36">
				<div className="w-full h-px bg-sc-off-white/50" />
			</div>
			<div className="container flex flex-col items-center justify-center py-6 mx-auto space-y-12 md:-space-y-8 md:grid md:grid-flow-row md:grid-cols-6 md:grid-rows-1 lg:w-10/12 2xl:w-8/12 md:py-0 md:mt-8 md:pb-8">
				<div className="grid grid-flow-col grid-cols-12 grid-rows-1 md:col-start-1 md:row-start-1 md:col-span-3 md:h-full ">
					<div
						className="flex justify-end w-full h-full col-span-1 col-start-1 row-start-1 p-2 cursor-pointer md: lg:p-3 xl:p-4"
						onClick={() => handleSwipe("back")}
					>
						<img
							src={iconCaret}
							className={` rotate-180 ${
								currentTab === 0 ? "opacity-40" : "opacity-100"
							} `}
						/>
					</div>
					<div className="flex flex-col w-10/12 col-span-12 col-start-1 row-start-1 mx-auto md:flex-row">
						<div className="relative w-full p-6 lg:mb-12 rounded-xl isolate">
							<img
								src={cardBack}
								className="w-full h-auto rounded-lg -rotate-3"
							/>

							<img
								src={currentSectionImage}
								className="absolute top-0 w-full m-6 -translate-x-12 -translate-y-4 rounded-xl rotate-1 md:-translate-y-10 md:scale-95"
								{...swipeHandlers}
							/>
						</div>
					</div>
					<div
						className="flex justify-end w-full h-full col-span-1 col-start-12 row-start-1 p-2 cursor-pointer lg:p-3 xl:p-4"
						onClick={() => handleSwipe("forward")}
					>
						<img
							src={iconCaret}
							className={` text-sc-off-white  ${
								currentTab === 5 ? "opacity-40" : "opacity-100"
							}`}
						/>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center w-full p-0 mb-12 md:col-start-4 md:col-span-3 md:row-start-1 lg:p-2">
					<h3 className="w-10/12 pt-8 text-2xl font-Cinzel text-sc-off-white">
						{currentSectionTitle}
					</h3>
					<p className="w-10/12 pt-4 pb-4 text-lg font-Catamaran text-sc-off-white">
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
					<Link
						to={`/elements#${currentElement}`}
						className="w-10/12 px-8 py-4 text-2xl font-medium text-center border-2 rounded font-Cinzel md:text-2xl hover:text-sc-gold text-sc-off-white hover:border-sc-gold border-sc-off-white"
					>
						Learn More
					</Link>
				</div>
			</div>
		</>
	);
};

export default SectionWrapper(
	HomePageElementsCarousel,
	"elements",
	"bg-sc-dark-black"
);
