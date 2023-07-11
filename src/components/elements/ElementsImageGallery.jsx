import React, { useState, useEffect, useContext } from "react";
import { useCycleIndex } from "../global/utils/useCycleIndex";
import { CardContext } from "../../context/CardContext";
import IconCaret from "../global/svgs/IconCaret";
import { cardBack } from "../../assets";
import { wrap } from "@popmotion/popcorn";
import getIndicatorColor from "../global/utils/getIndicatorColor";
import GalleryCard from "../global/utils/GalleryCard";

const ElementsImageGallery = ({
	element,
	isElementInView,
	isEven,
	hasElementLoaded,
	currentGlobalElementInView,
	setCurrentElementInView,
}) => {
	const [userInteraction, setUserInteraction] = useState(false);
	const [galleryLength, setGalleryLength] = useState(4);
	const { getCardById } = useContext(CardContext);
	const [shouldCycle, setShouldCycle] = useState(false);
	const GAL_TIMER = 9000;
	const [currentImageIndex, setCurrentImageIndex] = useCycleIndex(
		galleryLength,
		GAL_TIMER,
		shouldCycle
	);
	const [isLoading, setIsLoading] = useState(true);
	const [cardImages, setCardImages] = useState(null);


	const [[page, direction], setPage] = useState([0, 0]);

	const imageIndex = wrap(0, galleryLength, page);

	const paginate = (newDirection) => {
		setPage([page + newDirection, newDirection]);
	};

	useEffect(() => {
		handleChangeIndex(direction);
	}, [direction]);


	useEffect(() => {
		const fetchFeaturedCards = async () => {
			setIsLoading(true);

			let newFeaturedCardImages = {};

			if (Array.isArray(element.featuredCardId)) {
				for (const cardId of element.featuredCardId) {
					const card = await getCardById(cardId);

					if (card && card.imageUrl) {
						newFeaturedCardImages[cardId] = {
							imageUrl: card.imageUrl,
							imageAlt: card.imageAltText,
							srcSet: card.srcSet,
						};
					}
				}
			} else {
				const card = await getCardById(element.featuredCardId);

				if (card && card.imageUrl) {
					newFeaturedCardImages[element.featuredCardId] = {
						imageUrl: card.imageUrl,
						imageAlt: card.imageAltText,
						srcSet: card.srcSet,
					};
				}
			}

			setCardImages(Object.values(newFeaturedCardImages));
			setGalleryLength(Object.values(newFeaturedCardImages).length);
			setIsLoading(false);
		};
		fetchFeaturedCards();
	}, [getCardById]);

	useEffect(() => {
		setShouldCycle(isElementInView && !userInteraction);
	}, [isElementInView, userInteraction]);


	const handleChangeIndex = (index) => {
		setUserInteraction(true);
		if (
			currentGlobalElementInView !== element.sectionElement.toLowerCase()
		) {
			setCurrentElementInView(element.sectionElement.toLowerCase());
		}
		setCurrentImageIndex(index);
	};


	return (
		<div className="flex flex-col ">
			<div className="flex flex-row items-center space-x-6 align-middle ">
				<button onClick={() => paginate(-1)} className="w-1/12 h-auto">
					<IconCaret
						className={`w-full p-2 scale-90 rotate-180 lg:scale-60 xl:scale-50 lg:hover:scale-80 xl:hover:scale-70 ${
							isEven ? "text-sc-off-white" : "text-sc-dark-blue"
						} transition-all duration-150 ease-in-out `}
					/>
				</button>

				<div className="w-9/12 h-full rounded-lg shadow-xl relative aspect-[5/7] overflow-visible">
					<div
						className={`relative w-full h-full overflow-clip`}
					>
						<img
							src={cardBack}
							className="relative z-0 object-cover w-full h-full rounded-lg "
							loading="lazy"
						/>
						{cardImages && hasElementLoaded ? (
							<>
								<GalleryCard
									direction={direction}
									className={`absolute top-0 w-full z-1 rounded-lg`}
									page={page}
									src={cardImages[imageIndex].imageUrl}
									srcSet={cardImages[imageIndex].srcSet}
									alt={cardImages[imageIndex].imageAlt}
								/>
							</>
						) : null}
					</div>
				</div>

				<button onClick={() => paginate(1)} className="w-1/12 h-auto">
					<IconCaret
						className={`w-full p-2 scale-90 lg:scale-60 xl:scale-50 ${
							isEven ? "text-sc-off-white" : "text-sc-dark-blue"
						}`}
					/>
				</button>
			</div>
			<div className="flex justify-center w-full pt-4">
				<ul className="flex flex-row items-center w-1/3 space-x-1">
					{Array.from({ length: galleryLength }).map((_, index) => (
						<li
							key={index}
							className={`${getIndicatorColor(
								index,
								imageIndex,
								isEven
							)}  h-1 w-full rounded-md cursor-pointer`}
							onClick={ () => setPage([index, index < page ? '-1' : '1'])}
						>
							&nbsp;
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ElementsImageGallery;
