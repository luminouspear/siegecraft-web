import React, { useState, useEffect, useRef } from "react";
import FullWidthWrapper from "../hoc/FullWidthWrapper";
import { heroSection } from "../../constants";
import { useCycleIndex } from "../global/utils/useCycleIndex";
import { Reveal } from "../global/utils/Reveal";
import { Link } from "react-router-dom";
import { ScaleImage } from "../global/utils/ScaleImage";

const HeroSection = () => {
	const [currentImage, setCurrentImage] = useState(heroSection[0].src);
	const [currentImageAlt, setCurrentImageAlt] = useState(heroSection[0].alt);
	const [currentTitle, setCurrentTitle] = useState(heroSection[0].title);
	const [currentSubtitle, setCurrentSubtitle] = useState(
		heroSection[0].subTitle
	);
	const userInteraction = false;
	const currentImageIndex = useCycleIndex(
		heroSection.length,
		9000,
		!userInteraction
	);



	useEffect(() => {


		setCurrentImage(heroSection[currentImageIndex[0]].src);
		setCurrentImageAlt(heroSection[currentImageIndex[0]].alt);
		setCurrentTitle(heroSection[currentImageIndex[0]].title);
		setCurrentSubtitle(heroSection[currentImageIndex[0]].subTitle);
	}, [currentImageIndex]);

	return (
		<div className="inline-block w-full">
			<div className="inline-block w-full min-h-screen">
				<div className="h-full flex flex-col">
					<ScaleImage
						className="h-screen bg-no-repeat bg-[center_center]  bg-cover w-full col-start-1 col-span-8 grid grid-flow-col  object-cover grid-cols-12 md:grid-cols-10 grid-rows-8 lg:grid-rows-6 pb-12 md:pb-0 "
						role="img"
						aria-label={currentImageAlt}
						style={{ backgroundImage: `url(${currentImage})` }}
						userInteraction={userInteraction}
						currentImageIndex={currentImageIndex}

					>
						<Reveal
							className={`row-start-4 md:row-start-3 col-span-10 md:col-span-5 lg:col-span-5 xl:col-span-4 xl:col-start-6 2xl:col-span-3 2xl:col-start-7 lg:row-start-3  col-start-2 md:col-start-5 lg:col-start-5 md:mr-8 lg:mr-0 bg-sc-off-white  min-w-full opacity-80 p-8 shadow-2xl rounded h-fit backdrop-blur-sm`}
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
								<button className="text-sc-off-white bg-sc-red hover:bg-sc-red-dark hover:text-sc-gold text-center w-full text-xl md:text-2xl mt-4 md:text-xl lg:text-4xl py-5 px-12 rounded font-Cinzel font-bold cursor-pointer">
									<Link to="/elements">Learn More</Link>
								</button>
							</div>
						</Reveal>
					</ScaleImage>
				</div>
			</div>
		</div>
	);
};

export default FullWidthWrapper(HeroSection, "hero");
