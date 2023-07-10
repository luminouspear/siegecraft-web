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
		gallery[currentImageIndex].original().then((module) => {
			setCurrentImage(module.default)
		})
		setCurrentImageAlt(gallery[currentImageIndex].originalAlt);

		const nextImageIndex = (currentImageIndex + 1) % galleryLength;
		gallery[nextImageIndex].original().then((module) => {
			const imgNext = new Image();
			imgNext.src = module.default;
			imgNext.alt = gallery[nextImageIndex].alt;
			imgNext.onload = () => setNextImage(imgNext.src);
		})

		const previousImageIndex =
			(currentImageIndex - 1 + galleryLength) % galleryLength;

		gallery[previousImageIndex].original().then((module) => {
			const imgPrev = new Image();
			imgPrev.src = module.default;
			imgPrev.alt = gallery[previousImageIndex].alt;
			imgPrev.onload = () => setPrevImage(imgPrev.src);

		})



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
				<div className="grid items-center grid-cols-12 grid-rows-1 align-middle">
					<button
						className="w-full h-full col-span-2 col-start-1 row-start-1 lg:col-span-1 lg:col-start-1 "
						onClick={showPrevImage}
					>
						<IconCaret
							className={`w-full rotate-180 px-6 sm:p-10 md:px-12 xl:px-10 lg:px-8 2xl:px-14 text-sc-off-white opacity-80
             drop-shadow-lg `}
						/>
					</button>
					<div className="w-full col-span-12 col-start-1 row-start-1">
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
						className="w-full h-full col-span-2 col-start-11 row-start-1 lg:col-start-12 lg:col-span-1 "
						onClick={showNextImage}
					>
						<IconCaret
							className={`w-full px-6 sm:p-10 md:px-12 lg:px-8 xl:px-10 2xl:px-14 text-sc-off-white opacity-80 drop-shadow-lg  `}
						/>
					</button>
				</div>
				<div className="flex justify-center w-full pt-4 -mt-8">
					<ul className="flex flex-row items-center w-1/3 h-4 space-x-1">
						{Array.from({ length: galleryLength }).map(
							(_, index) => (
								<li
									key={index}
									className={`${getIndicatorColor(
										index,
                    currentImageIndex,

									)}  h-1 w-full rounded-md cursor-pointer`}
									onClick={() => handleChangeIndex(index)}
								>
									&nbsp;
								</li>
							)
						)}
					</ul>
				</div>
			</div>
		</>
	);
};

export default GallerySection;
