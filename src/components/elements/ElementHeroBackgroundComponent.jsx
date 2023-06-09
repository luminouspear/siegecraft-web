import React, { useState, useEffect, useRef } from "react";
import { Reveal } from "../global/utils/Reveal";

export function ElementHeroBackgroundComponent({
	element,
	currentGlobalElementInView,
	setCurrentElementInView,
}) {
	const elementName = element.sectionElement.toLowerCase();
	const sectionId = elementName + "-section";
	const backgroundImageRef = useRef(null);
	const [bgImage, setBgImage] = useState(null)

	const [isInView, setIsInView] = useState(false);
	const [hasElementLoaded, setHasElementLoaded] = useState(false);


	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// console.log("intersection ratio: ", entry.intersectionRatio)
					if (entry.intersectionRatio >= 0.6) {
						setCurrentElementInView(elementName);
					} else if (entry.intersectionRatio > 0) {
						setIsInView(true);
						setHasElementLoaded(true);
					}
				}
			});
		},
			{
				root: null,
				rootMargin: "0px",
				threshold: [0, 0.6],
			});

		if (backgroundImageRef.current) {
			observer.observe(backgroundImageRef.current);
		}
		return () => {
			observer.disconnect();
		};
	}, []);

	useEffect(() => {
		element.sectionBg().then((module) => {
			setBgImage(module.default)
		})
	},[])

	useEffect(() => {
		if (
			currentGlobalElementInView === element.sectionElement.toLowerCase()
		) {
			setIsInView(true);
			setHasElementLoaded(true);
		} else {
			setIsInView(false);
		}
	}, [currentGlobalElementInView]);

	return (
		<>
			<span
				className="opacity-0 pointer-events-none hash-span"
				id={sectionId}
			></span>
			<div className="h-screen  bg-no-repeat bg-cover object-cover bg-[center_center] w-full col-start-1 col-span-8  grid grid-flow-col grid-cols-12 md:grid-cols-8 grid-rows-8 lg:grid-rows-3  md:pb-0">
				<div
					className="h-full col-start-1 row-span-4 row-start-1 col-span-full md:col-span-8 md:col-start-1 lg:row-span-3 lg:row-start-1"
					id={elementName}
					ref={backgroundImageRef}
				>
					{hasElementLoaded && element.sectionBg && (
						<img
							src={bgImage}
							// srcSet={element.sectionBgSrcSet}
							// sizes="(max-width: 768px) 500px,(max-width: 1023px) 667px,1000px"
							className="object-cover w-full min-h-full col-span-1 col-start-1 row-span-1 row-start-1 "
							loading="lazy"
						/>
					)}
				</div>
				<Reveal
					className={`row-start-4 md:row-start-3 col-span-10 md:col-span-5  lg:col-span-3 ${
						element.id % 2 === 0
							? "col-start-2 md:col-start-2 lg:col-start-2 md:-ml-8 lg:ml-0"
							: "col-start-2 md:col-start-4 lg:col-start-5 md:mr-8 lg:mr-0"
					} bg-sc-off-white opacity-[80%] p-8 shadow-2xl rounded h-fit backdrop-blur-sm`}
				>
					<h2 className="mb-4 text-3xl font-bold font-Cinzel">
						{element.sectionTitle}
					</h2>
					<p className="font-medium font-Catamaran sm:text-lg">
						{element.sectionSubtitle}
					</p>
				</Reveal>
			</div>
		</>
	);
}
