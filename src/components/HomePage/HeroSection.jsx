import React, { useState, useEffect, useRef } from "react";
import FullWidthWrapper from "../hoc/FullWidthWrapper";
import { heroSection } from "../../constants";
import { useCycleIndex } from "../global/utils/useCycleIndex";
import { Reveal } from "../global/utils/Reveal";
import { Link } from "react-router-dom";
import { ScaleImage } from "../global/utils/ScaleImage";

const HeroSection = () => {
	const [currentImage, setCurrentImage] = useState(null);
	const [nextImage, setNextImage] = useState(null);
	const [currentImageAlt, setCurrentImageAlt] = useState(heroSection[0].alt);
	const [currentTitle, setCurrentTitle] = useState(heroSection[0].title);
	const [currentSubtitle, setCurrentSubtitle] = useState(
		heroSection[0].subTitle
	);
	const userInteraction = false;
	const currentImageIndex = useCycleIndex(
		heroSection.length,
		12000,
		!userInteraction
	);

	useEffect(() => {
		heroSection[0].src().then((module) => {
			setCurrentImage(module.default);
		});
	}, []);

	useEffect(() => {
		heroSection[currentImageIndex[0]].src().then((module) => {
			setCurrentImage(module.default);
		});

		setCurrentImageAlt(heroSection[currentImageIndex[0]].alt);
		setCurrentTitle(heroSection[currentImageIndex[0]].title);
		setCurrentSubtitle(heroSection[currentImageIndex[0]].subTitle);

		const nextImageIndex = (currentImageIndex[0] + 1) % heroSection.length;
		heroSection[nextImageIndex].src().then((module) => {
			setNextImage(module.default);
		});
	}, [currentImageIndex]);

	return (
		<div className="inline-block w-full">
			<div className="inline-block w-full min-h-screen">
				<div className="grid h-screen grid-rows-[repeat(8,minmax(0,1fr))] grid-cols-12 grid-flow-col ">
					<ScaleImage
						src={currentImage}
						alt={currentImageAlt}
						className="grid w-full h-full grid-flow-col grid-cols-4 col-start-1 grid-rows-4 row-start-1 row-span-full col-span-full "
						userInteraction={userInteraction}
						currentImageIndex={currentImageIndex}
					></ScaleImage>
					<Reveal
						className={`row-start-4 md:row-start-6 col-span-10 md:col-span-8 lg:col-span-5  xl:col-span-4 xl:col-start-8 2xl:col-span-4  2xl:col-start-8 lg:row-start-5  col-start-2 md:col-start-3  lg:col-start-7 md:mr-8 lg:mr-0 bg-sc-off-white  min-w-full opacity-80 p-8 shadow-2xl rounded h-fit backdrop-blur-sm`}
					>
						<div className={`flex flex-col space-y-6`}>
							<h1
								className={`text-3xl 2xl:text-4xl font-Cinzel font-bold mb-4`}
								dangerouslySetInnerHTML={{
									__html: currentTitle,
								}}
							/>
							<h2
								className={`font-Catamaran sm:text-lg 2xl:text-xl font-semibold`}
								dangerouslySetInnerHTML={{
									__html: currentSubtitle,
								}}
							/>
							<button className="w-full px-12 py-5 mt-4 text-xl font-bold text-center rounded cursor-pointer text-sc-off-white bg-sc-red hover:bg-sc-red-dark hover:text-sc-gold md:text-2xl md:text-xl lg:text-4xl font-Cinzel">
								<Link to="/elements">Learn More</Link>
							</button>
						</div>
					</Reveal>
				</div>
			</div>
		</div>
	);
};

export default FullWidthWrapper(HeroSection, "hero");
