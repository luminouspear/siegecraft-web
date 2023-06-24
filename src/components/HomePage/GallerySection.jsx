import React, { useEffect, useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { homePageGallery as gallery } from "../../constants";
import { useCycleIndex } from "../global/utils/useCycleIndex";
import styles from "../../styles";
import { useSwipeable } from "react-swipeable";
import getIndicatorColor from "../global/utils/getIndicatorColor";
import { IconCaret } from "../../assets";
import { Transition } from "react-transition-group";
const GallerySection = () => {
	const [userInteraction, setUserInteraction] = useState(false);
	const galleryLength = gallery.length;
	const [shouldCycle, setShouldCycle] = useState(true);
	const GAL_TIMER = 9000;
	const [currentImageIndex, setCurrentImageIndex] = useCycleIndex(
		galleryLength,
		GAL_TIMER,
		shouldCycle
	);

	const [currentImage, setCurrentImage] = useState(null);
	const [currentImageAlt, setCurrentImageAlt] = useState(null);
	const [nextImage, setNextImage] = useState(null);
	const [prevImage, setPrevImage] = useState(null);


	useEffect(() => {
		setCurrentImage(gallery[currentImageIndex].original);
		setCurrentImageAlt(gallery[currentImageIndex].originalAlt);

		const nextImageIndex = (currentImageIndex + 1) % galleryLength;
		const imgNext = new Image();
		imgNext.src = gallery[nextImageIndex].original;
		imgNext.alt = gallery[nextImageIndex].alt;

		const previousImageIndex =
			(currentImageIndex - 1 + galleryLength) % galleryLength;
		const imgPrev = new Image();
		imgPrev.src = gallery[previousImageIndex].original;
		imgPrev.alt = gallery[previousImageIndex].alt;

		imgNext.onload = () => setNextImage(imgNext.src);
		imgPrev.onload = () => setPrevImage(imgPrev.src);
  }, [currentImageIndex]);

  useEffect(() => {
    setShouldCycle(!userInteraction)
  }, [userInteraction])

	const handleChangeIndex = (index) => {
		setUserInteraction(true);
		setCurrentImageIndex(index);
	};

	const showNextImage = () => {
		handleChangeIndex((prevIndex) => (prevIndex + 1) % galleryLength);
	};

	const showPrevImage = () => {
		handleChangeIndex((prevIndex) =>
			prevIndex === 0 ? galleryLength - 1 : prevIndex - 1
		);
	};

	const handlers = useSwipeable({
		onSwipedLeft: () => showNextImage(),
		onSwipedRight: () => showPrevImage(),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});

	return (
		<>
			<div {...handlers} className="flex flex-col ">
				<div className="grid grid-cols-12 grid-rows-1 align-middle items-center">
					<button
						className="w-full col-start-1 row-start-1 col-span-2 lg:col-span-1 lg:col-start-1 h-full "
						onClick={showPrevImage}
					>
						<IconCaret
							className={`w-full rotate-180 px-6 md:px-12 xl:px-10 lg:px-8 2xl:px-14 text-sc-off-white opacity-80
             drop-shadow-lg `}
						/>
					</button>
					<div className="w-full col-start-1 row-start-1 col-span-12">
						<Transition in timeout={500}>
							{(state) => (
								<img
									className="min-w-full h-[40vh] md:h-[50vh] lg:h-[80vh] 2xl:h-[90vh] object-cover "
                  src={currentImage}
                  alt={currentImageAlt}
									style={{
										...styles.defaultStyle,
										...styles.transitionStyles[state],
									}}
								/>
							)}
						</Transition>
					</div>
					<button
						className="w-full col-start-11 col-span-2 lg:col-start-12 lg:col-span-1 row-start-1 h-full "
						onClick={showNextImage}
					>
						<IconCaret
							className={`w-full px-6 md:px-12 lg:px-8 xl:px-10 2xl:px-14 text-sc-off-white opacity-80 drop-shadow-lg  `}
						/>
					</button>
				</div>
			</div>
		</>
	);
};

export default GallerySection;
