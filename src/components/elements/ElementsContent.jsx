import React, { useState, useEffect, useRef } from "react";
import { bg_texture_light, bg_texture_dark } from "../../assets";
import { elementPageInfo } from "../../constants";
import { Reveal } from "../utils/Reveal";
import { useCycleIndex } from "../utils/useCycleIndex";
import IconCaret from "../global/svgs/IconCaret";

export function ElementsContent(
	featuredCardImages,
	currentElementInView,
	isScrolled
) {
	const [imageIndex, setImageIndex] = useState(0);
	const [isInView, setIsInView] = useState(false);
	const cardRef = useRef();
	const [userInteraction, setUserInteraction] = useState(false);
	const GAL_LENGTH = 4;
	const GAL_TIMER = 9000;

	const currentImageIndex = useCycleIndex(
		GAL_LENGTH,
		GAL_TIMER,
		!userInteraction
	);

	const showNextImage = () => {
		setUserInteraction(true);
		setImageIndex((prevIndex) => (prevIndex + 1) % GAL_LENGTH);
	};

	const showPrevImage = () => {
		setUserInteraction(true);
		setImageIndex((prevIndex) =>
			prevIndex === 0 ? GAL_LENGTH - 1 : prevIndex - 1
		);
	};

	useEffect(() => {
		setImageIndex(currentImageIndex);
	}, [currentImageIndex]);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			//this is attached to a single element so only need to access the 0th entry
			if (entries[0].isIntersecting) {
				setIsInView(true);
			} else {
				setIsInView(false);
			}
		});

		if (cardRef.current) {
			observer.observe(cardRef.current);
		}

		return () => {
			if (cardRef.current) {
				observer.unobserve(cardRef.current);
			}
		};
	}, []);

	function getIndicatorColor(index, element) {
		if (index === currentImageIndex) {
			if (element.id % 2 === 0) {
				return "bg-white";
			} else {
				return "bg-black";
			}
		} else {
			if (element.id % 2 === 0) {
				return "bg-slate-600";
			} else {
				return "bg-gray-400 ";
			}
		}
		return "bg-white";
	}

	return (
		<div className="inline-block w-full min-h-screen">
			<div className=" bg-sc-off-white font-Catamaran  min-h-fit">
				{elementPageInfo.map((element) => (
					<div key={element.id} className="h-full flex flex-col ">
						<span
							className="hash-span opacity-0 pointer-events-none"
							id={element.sectionElement.toLowerCase()}
						></span>
						<div
							className="h-screen bg-fixed bg-no-repeat bg-cover bg-[center_center] w-full col-start-1 col-span-8  grid grid-flow-col grid-cols-12 md:grid-cols-8 grid-rows-8 lg:grid-rows-3  pb-12 md:pb-0"
							style={{
								backgroundImage: `url(${element.sectionBg})`,
							}}
						>
							<Reveal
								className={`row-start-4 md:row-start-2 col-span-10 md:col-span-5  lg:col-span-3 ${
									element.id % 2 === 0
										? "col-start-2 md:col-start-2 lg:col-start-2 md:-ml-8 lg:ml-0"
										: "col-start-2 md:col-start-4 lg:col-start-5 md:mr-8 lg:mr-0"
								} bg-sc-off-white opacity-[80%] p-8 shadow-2xl rounded h-fit backdrop-blur-sm`}
								id={
									element.sectionElement.toLowerCase() +
									"-section"
								}
							>
								<h2 className="text-3xl font-Cinzel font-bold mb-4">
									{element.sectionTitle}
								</h2>
								<p className="font-Catamaran sm:text-lg font-medium">
									{element.sectionSubtitle}
								</p>
							</Reveal>
						</div>
						<div
							className="mx-auto flex min-h-fit md:inline-flex bg-cover bg-[center_center] bg-no-repeat w-full shadow-inner justify-center"
							style={{
								backgroundImage: `url(${
									element.id % 2 === 0
										? bg_texture_dark
										: bg_texture_light
								})`,
							}}
						>
							<div
								className={`w-full container flex flex-col space-y-4 py-8 lg:my-0 md:grid  md:grid-flow-col  grid-cols-1  md:grid-cols-2 md:grid-rows-1 justify-center lg:items-center align-middle   ${
									element.id % 2 === 0
										? "md:order-1"
										: "md:order-2"
								}`}
							>
								<Reveal
									className={`px-8 md:px-12 lg:px-16 mt-8 md:mt-0 row-start-1 lg:bg-opacity-40 lg:shadow lg:rounded-lg lg:py-12 lg:h-fit
									${
										element.id % 2 === 0
											? "md:order-1 lg:ml-8 text-sc-off-white lg:bg-sc-dark-black"
											: "md:order-2 lg:mr-8 text-sc-dark-blue lg:bg-sc-off-white "
									}`}
								>
									<h2 className="text-2xl font-Cinzel font-bold mb-4">
										{element.featuredSectionHeader}
									</h2>
									<p
										className="sm:mb-0 sm:text-lg"
										dangerouslySetInnerHTML={{
											__html: element.featuredSectionText,
										}}
									/>
								</Reveal>
								<Reveal
									className={` mx-auto px-2 md:p-8 xl:p-36 md:mb-0
                                                        ${
															element.id % 2 === 0
																? "md:order-2"
																: "md:order-1"
														}`}
								>
									<div className="flex flex-col">
										<div className=" flex flex-row items-center align-middle space-x-6">
											<button onClick={showPrevImage} className="w-1/12 h-auto">
												<IconCaret className="w-full p-2 scale-90 rotate-180 text-sc-off-white" />
											</button>

											<img
												className=" w-9/12 h-auto rounded-lg shadow-xl"
												ref={cardRef}
												src={
													typeof featuredCardImages[
														element.sectionElement
													] === "object"
														? Object.values(
																featuredCardImages[
																	element
																		.sectionElement
																]
														  )[currentImageIndex]
														: featuredCardImages[
																element
																	.sectionElement
														  ]
												}
											/>

											<button onClick={showNextImage} className="w-1/12 h-auto">
												<IconCaret className="w-full p-2 scale-90 text-sc-off-white" />
											</button>
										</div>
										<div className="w-full flex justify-center pt-4">
											<ul className="flex flex-row w-1/3 space-x-1 items-center">
												{[1, 2, 3, 4].map(
													(item, index) => (
														<li
															key={index}
															className={`${getIndicatorColor(
																index,
																element
															)}  h-1 w-full rounded-md
																`}
														>
															&nbsp;
														</li>
													)
												)}
											</ul>
										</div>
									</div>
								</Reveal>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
