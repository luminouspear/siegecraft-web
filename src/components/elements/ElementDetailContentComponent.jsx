import React, { useState, useEffect, useContext } from "react";
import { bg_texture_light, bg_texture_dark } from "../../assets";
import { Reveal } from "../utils/Reveal";
import IconCaret from "../global/svgs/IconCaret";
import { cardBack } from "../../assets";
import { useCycleIndex } from "../utils/useCycleIndex";
import { CardContext } from "../../context/CardContext";



export function ElementDetailContentComponent(props) {
	const {
		element,
		cardRef,
		currentGlobalElementInView,
	} = props;

	// const cardImages = Object.values(
	// 	Object.values(featuredCardImages)[0][element.sectionElement]
	// );
const { getCardById } = useContext(CardContext);
	const [cardImages, setCardImages] = useState(null)
	const [galleryLength, setGalleryLength] = useState(4)
	const [userInteraction, setUserInteraction] = useState(false)
	const [isElementInView, setIsElementInView] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const GAL_TIMER = 9000
	const [currentImageIndex, setCurrentImageIndex] = useCycleIndex(
		galleryLength,
		GAL_TIMER,
		!userInteraction && currentGlobalElementInView === element.sectionElement
	);


	useEffect(() => {
		const fetchFeaturedCards = async () => {
			setIsLoading(true);

			let newFeaturedCardImages = {};

				if ( Array.isArray(element.featuredCardId)) {
					console.log("el: ", element)

					for (const cardId of element.featuredCardId) {
						const card = await getCardById(cardId);

						if (card && card.imageUrl) {
							newFeaturedCardImages[
								cardId
							] = card.imageUrl;
						}
					}
				} else {
					const card = await getCardById(element.featuredCardId);

					if (card && card.imageUrl) {
						newFeaturedCardImages[element.featuredCardId] =
							card.imageUrl;
					}
				}
			console.log("newfeaturedcardimages", )

			setCardImages(Object.values(newFeaturedCardImages));
			setIsLoading(false);
		};
		fetchFeaturedCards();
	}, [ getCardById]);



	const showNextImage = () => {
		setUserInteraction(true);
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryLength);
	};

	const showPrevImage = () => {
		setUserInteraction(true);
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? galleryLength - 1 : prevIndex - 1
		);
	};

	useEffect(() => {
		console.log(currentGlobalElementInView)
	  setIsElementInView(currentGlobalElementInView)


	}, [currentGlobalElementInView])

	const isEven = element.id % 2 === 0;

function getIndicatorColor(index) {
	if (index === currentImageIndex) {
		if (isEven === 0) {
			return "bg-white";
		} else {
			return "bg-black";
		}
	} else {
		if (isEven === 0) {
			return "bg-slate-600";
		} else {
			return "bg-gray-400 ";
		}
	}
	return "bg-white";
}

	return (
		<div
			className="mx-auto flex min-h-fit md:inline-flex bg-cover bg-[center_center] bg-no-repeat w-full shadow-inner justify-center"
			style={{
				backgroundImage: `url(${
					isEven ? bg_texture_dark : bg_texture_light
				})`,
			}}
		>
			<div
				className={`w-full container flex flex-col space-y-4 py-8 lg:my-0 md:grid  md:grid-flow-col  grid-cols-1  md:grid-cols-2 md:grid-rows-1 justify-center lg:items-center align-middle   ${
					isEven ? "md:order-1" : "md:order-2"
				}`}
			>
				<Reveal
					className={`px-8 md:px-12 lg:px-16 mt-8 md:mt-0 row-start-1 lg:bg-opacity-40 lg:shadow lg:rounded-lg lg:py-12 lg:h-fit
									${
										isEven
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
															isEven
																? "md:order-2"
																: "md:order-1"
														}`}
				>
					<div className="flex flex-col">
						<div className=" flex flex-row items-center align-middle space-x-6">
							<button
								onClick={showPrevImage}
								className="w-1/12 h-auto"
							>
								<IconCaret
									className={`w-full p-2 scale-90 rotate-180 ${
										isEven
											? "text-sc-off-white"
											: "text-sc-dark-blue"
									} `}
								/>
							</button>

							<img
								className=" w-9/12 h-auto rounded-lg shadow-xl"
								ref={cardRef}
								loading="lazy"
								src={
									 !isLoading ? cardImages[currentImageIndex] : cardBack
								}
							/>

							<button
								onClick={showNextImage}
								className="w-1/12 h-auto"
							>
								<IconCaret
									className={`w-full p-2 scale-90 ${
										isEven
											? "text-sc-off-white"
											: "text-sc-dark-blue"
									}`}
								/>
							</button>
						</div>
						<div className="w-full flex justify-center pt-4">
							<ul className="flex flex-row w-1/3 space-x-1 items-center">
								{[1, 2, 3, 4].map((item, index) => (
									<li
										key={index}
										className={`${getIndicatorColor(
											index
										)}  h-1 w-full rounded-md
																`}
									>
										&nbsp;
									</li>
								))}
							</ul>
						</div>
					</div>
				</Reveal>
			</div>
		</div>
	);
}
