import React, { useState, useEffect, useRef } from "react";
import FullWidthWrapper from "../hoc/FullWidthWrapper";
import { heroSection } from "../../constants";
import { useCycleIndex } from "../utils/useCycleIndex";

const HeroSection = () => {
	const [currentImage, setCurrentImage] = useState(heroSection[0].src);
	const [currentImageAlt, setCurrentImageAlt] = useState(heroSection[0].alt);
	const [currentTitle, setCurrentTitle] = useState(heroSection[0].title);
	const [currentSubtitle, setCurrentSubtitle] = useState(
		heroSection[0].subTitle
	);
	const userInteraction = false;
	const currentImageIndex = useCycleIndex(heroSection.length, 9000, !userInteraction)

	const imageRef = useRef(null);

	useEffect(() => {
		console.log(currentImageIndex[0])
		setCurrentImage(heroSection[currentImageIndex[0]].src)
		setCurrentImageAlt(heroSection[currentImageIndex[0]].alt)
		setCurrentTitle(heroSection[currentImageIndex[0]].title)
		setCurrentSubtitle(heroSection[currentImageIndex[0]].subTitle)

	}, [currentImageIndex])




	return (
		<div className="w-full px-0 mx-0 text-sc-dark-black ">
			<div className="flex flex-col gap-6 md:grid md:grid-cols-12 md:grid-rows-1 md:grid-rows-12 min-w-full min-h-fit">
				<img
					src={currentImage}
					alt={currentImageAlt}
					ref={imageRef}
					className="col-span-1 md:col-span-12 md:row-start-1 md:col-start-1 object-cover w-full h-auto md:max-h-[80vh]"
				/>
				<div className="md:col-start-9 md:row-start-1 md:col-span-4 lg:col-span-5 lg:col-start-8 xl:col-start-9 xl:col-span-4 w-full bg-white md:bg-white/75">
					<div className=" flex flex-col  items-center  w-10/12 md:pt-[10%] lg:pt-0 lg:pb-[10%]  mx-auto xl:pt-[33%] xl:pb-0 ">
						<h1 className="px-8 md:px-0 lg:py-12 pt-8 pb-4  text-center md:text-3xl text-4xl lg:text-4xl font-Cinzel font-bold">
							{currentTitle}
						</h1>
						<h2
							className="text-center text-xl md:text-base lg:text-lg font-medium xl:text-2xl font-Catamaran pt-8 md:pt-4"
							dangerouslySetInnerHTML={{
								__html: currentSubtitle,
							}}
						>

						</h2>
						<a
							href="/store"
							className="text-sc-off-white bg-sc-red hover:bg-sc-red-dark hover:text-sc-gold text-center w-full text-2xl mt-4 md:text-xl lg:text-4xl py-5 px-12 rounded font-Cinzel font-bold cursor-pointer"
						>
							Order Now
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FullWidthWrapper(HeroSection, "hero");
