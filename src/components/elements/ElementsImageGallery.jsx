import React, { useState, useEffect, useContext } from "react";
import { useCycleIndex } from "../global/utils/useCycleIndex";
import { CardContext } from "../../context/CardContext";
import IconCaret from "../global/svgs/IconCaret";
import { cardBack } from "../../assets";
import { Transition } from "react-transition-group";
import { useSwipeable } from "react-swipeable";
import styles from "../../styles";
import getIndicatorColor from "../global/utils/getIndicatorColor";

const ElementsImageGallery = ({ element, isElementInView, isEven }) => {
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
	const [currentImage, setCurrentImage] = useState(null);
	const [nextImage, setNextImage] = useState(null);
	const [prevImage, setPrevImage] = useState(null);

	const defaultStyle = styles.defaultStyle;

	const transitionStyles = styles.transitionStyles;

	useEffect(() => {
		const fetchFeaturedCards = async () => {
			setIsLoading(true);

			let newFeaturedCardImages = {};

			if (Array.isArray(element.featuredCardId)) {
				for (const cardId of element.featuredCardId) {
					const card = await getCardById(cardId);

					if (card && card.imageUrl) {
						newFeaturedCardImages[cardId] = card.imageUrl;
					}
				}
			} else {
				const card = await getCardById(element.featuredCardId);

				if (card && card.imageUrl) {
					newFeaturedCardImages[element.featuredCardId] =
						card.imageUrl;
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

	useEffect(() => {
		if (cardImages) {
			setCurrentImage(cardImages[currentImageIndex]);

			const nextImageIndex = (currentImageIndex + 1) % galleryLength;
			const imgNext = new Image();
			imgNext.src = cardImages[nextImageIndex];
			imgNext.onload = () => setNextImage(imgNext.src);

			const previousImageIndex =
				(currentImageIndex - 1 + galleryLength) % galleryLength;
			const imgPrev = new Image();
			imgPrev.src = cardImages[previousImageIndex];
			imgPrev.onload = () => setPrevImage(imgPrev.src);
		}
	}, [cardImages, currentImageIndex, galleryLength]);

	const showNextImage = () => {
		handleChangeIndex((prevIndex) => (prevIndex + 1) % galleryLength);
	};

	const showPrevImage = () => {
		handleChangeIndex((prevIndex) =>
			prevIndex === 0 ? galleryLength - 1 : prevIndex - 1
		);
	};

	const handleChangeIndex = (index) => {
		setUserInteraction(true);
		setCurrentImageIndex(index);
	};

	const handlers = useSwipeable({
		onSwipedLeft: () => showNextImage(),
		onSwipedRight: () => showPrevImage(),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});


	return (
		<div {...handlers} className="flex flex-col ">
			<div className=" flex flex-row items-center align-middle space-x-6">
				<button onClick={showPrevImage} className="w-1/12 h-auto">
					<IconCaret
						className={`w-full p-2 scale-90 rotate-180 lg:scale-60 xl:scale-50 lg:hover:scale-80 xl:hover:scale-70 ${
							isEven ? "text-sc-off-white" : "text-sc-dark-blue"
						} transition-all duration-150 ease-in-out `}
					/>
				</button>

				<div className="w-9/12 h-full rounded-lg shadow-xl relative aspect-[5/7] overflow-hidden">
					{currentImage ? (
						<Transition in timeout={500}>
							{(state) => (
								<img
									className="rounded-lg w-full h-full object-cover z-1 relative"
									src={currentImage}
									style={{
										...styles.defaultStyle,
										...styles.transitionStyles[state],
									}}
								/>
							)}
						</Transition>
					) : (
						<img
							src={cardBack}
							className="rounded-lg w-full h-full object-cover z-1 relative"
						/>
					)}
				</div>

				<button onClick={showNextImage} className="w-1/12 h-auto">
					<IconCaret
						className={`w-full p-2 scale-90 lg:scale-60 xl:scale-50 ${
							isEven ? "text-sc-off-white" : "text-sc-dark-blue"
						}`}
					/>
				</button>
			</div>
			<div className="w-full flex justify-center pt-4">
				<ul className="flex flex-row w-1/3 space-x-1 items-center">
					{Array.from({ length: galleryLength }).map((_, index) => (
						<li
							key={index}
							className={`${getIndicatorColor(
								index, currentImageIndex, isEven
							)}  h-1 w-full rounded-md cursor-pointer`}
							onClick={() => handleChangeIndex(index)}
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
