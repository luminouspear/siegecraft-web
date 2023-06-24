import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import SectionWrapper from "../hoc/SectionWrapper";
import {
	homePageSectionTitles,
	elementsCarouselContent,
} from "../../constants";
import { useSwipeable } from 'react-swipeable'
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
	const [currentElement, setCurrentElement] = useState(elementsCarouselContent[0].name.toLowerCase())



	useEffect(() => {
		setCurrentSectionTitle(
			elementsCarouselContent[currentTab].contentTitle
		);
		setCurrentSectionSubTitle(
			elementsCarouselContent[currentTab].contentSubtitle
		);
		setCurrentSectionImage(elementsCarouselContent[currentTab].image);
		setCurrentSectionImageAlt(elementsCarouselContent[currentTab].imageAlt);
		setCurrentElement(elementsCarouselContent[currentTab].name.toLowerCase())
	}, [currentTab]);

	const handleSwipe = (direction) => {
		switch (direction) {
			case "back":
				setCurrentTab(((currentTab - 1) + 6) % 6)
				return
			case "forward":
				setCurrentTab((currentTab + 1) % 6)
				return
			default:
				setCurrentTab(direction)
				return
		}
	}

	const swipeHandlers = useSwipeable({
		onSwipedLeft: () => handleSwipe("back"),
		onSwipedRight: () => handleSwipe("forward"),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,

	})

	return (
		<>
			<div className=" pt-24 w-10/12 md:max-w-2xl md:w-full mx-auto ">
				<h2
					className="text-4xl font-Cinzel font-medium text-center md:w-1/2 lg:w-full mx-auto pb-8 text-sc-off-white"
					dangerouslySetInnerHTML={{
						__html: homePageSectionTitles[1].title,
					}}
				/>
				<p
					className="text-center text-sc-off-white font-Catamaran w-8/12 lg:w-full lg:pb-12 mx-auto text-2xl"
					dangerouslySetInnerHTML={{
						__html: homePageSectionTitles[1].subTitle,
					}}
				></p>
			</div>

			<div className="grid span-1 grid-cols-6 grid-rows-2 gap-1 gap-y-2 md:grid-cols-12 md:grid-rows-1 lg:gap-2 min-w-full md:min-w-0 md:w-11/12 md:px-4 lg:w-10/12 xl:w-10/12 2xl:w-8/12 md:gap-4 lg:px-16 xl:px-36 mx-auto px-4 sm:px-8 pt-8 ">
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
						<div className="flex flex-col space-y-2 lg:space-y-4 justify-center items-center">
							<img
								src={content.icon}
								alt={content.iconAlt}
								className="fill-sc-off-white h-12 drop-shadow-lg mx-auto"
							/>
							<h3 className="font-Cinzel md:text-lg xl:text-2xl text-sc-off-white text-base sm:text-xl drop-shadow-lg">
								{content.name}
							</h3>
						</div>
					</div>
				))}
			</div>
			<div className="mx-4 lg:mx-16 xl:mx-36 mt-4">
				<div className="w-full h-px bg-sc-off-white/50" />
			</div>
			<div className="flex flex-col space-y-12 md:-space-y-8 md:grid md:grid-flow-row md:grid-cols-6 md:grid-rows-1 container lg:w-10/12 2xl:w-8/12 mx-auto  py-6  md:py-0 justify-center items-center md:mt-8 md:pb-8">
				<div className="grid grid-flow-col  grid-cols-12 grid-rows-1 md:col-start-1 md:row-start-1 md:col-span-3 md:h-full ">
					<div
						className="md: w-full h-full cursor-pointer col-start-1 col-span-1 row-start-1  flex justify-end p-2 lg:p-3 xl:p-4"
						onClick={() => handleSwipe("back")}
					>
						<img
							src={iconCaret}
							className={` rotate-180 ${
								currentTab === 0 ? "opacity-40" : "opacity-100"
							} `}
						/>
					</div>
					<div className="flex flex-col md:flex-row w-10/12 col-start-1 col-span-12 row-start-1 mx-auto">
						<div className=" w-full  p-6 lg:mb-12 relative rounded-xl isolate">
							<img
								src={cardBack}
								className="rounded-lg -rotate-3 w-full h-auto"
							/>

							<img
								src={currentSectionImage}
								className="rounded-xl absolute m-6 top-0 w-full rotate-1 -translate-x-12 -translate-y-4 md:-translate-y-10 md:scale-95"
								{...swipeHandlers}
							/>
						</div>
					</div>
					<div
						className="w-full h-full cursor-pointer col-start-12 col-span-1 row-start-1 flex justify-end p-2 lg:p-3 xl:p-4"
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
				<div className="md:col-start-4 md:col-span-3 md:row-start-1 w-full p-0 lg:p-2 flex flex-col justify-center items-center mb-12">
					<h3 className="text-2xl font-Cinzel text-sc-off-white w-10/12 pt-8">
						{currentSectionTitle}
					</h3>
					<p className="text-lg font-Catamaran text-sc-off-white w-10/12 pt-4 pb-4">
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
						className="font-Cinzel w-10/12 text-2xl md:text-2xl font-medium hover:text-sc-gold text-sc-off-white text-center px-8 py-4 rounded border-2 hover:border-sc-gold border-sc-off-white"
					>
						Learn More
					</Link>
				</div>
			</div>
		</>
	);
};

export default SectionWrapper(ElementsCarousel, "elements", "bg-sc-dark-black");
