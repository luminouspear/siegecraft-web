import React, { useState, useEffect, useRef } from "react";
import { Reveal } from "../global/utils/Reveal";

export function ElementHeroBackgroundComponent({
	element,
	setCurrentElementInView,
}) {
	const elementName = element.sectionElement.toLowerCase();
	const sectionId = elementName + "-section";
	const backgroundImageRef = useRef(null);

	const [isInView, setIsInView] = useState(false);

	//intersection observer for the text box
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						console.log(elementName);
						setCurrentElementInView(elementName);
					}
				});
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.8,
			}
		);

		const elementToObserve = document.getElementById(sectionId);
		if (elementToObserve) {
			observer.observe(elementToObserve);
		}

		return () => {
			observer.unobserve(elementToObserve);
		};
	}, [elementName, setCurrentElementInView, sectionId]);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					console.log(elementName.toUpperCase());
					// setCurrentElementInView(element.id);
				}
			});
		});

		if (backgroundImageRef.current) {
			observer.observe(backgroundImageRef.current);
		}
		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<>
			<span
				className="hash-span opacity-0 pointer-events-none"
				id={elementName}
			></span>
			<div
				className="h-screen  bg-no-repeat bg-cover bg-[center_center] w-full col-start-1 col-span-8  grid grid-flow-col grid-cols-12 md:grid-cols-8 grid-rows-8 lg:grid-rows-3  pb-12 md:pb-0"
				style={{
					backgroundImage: `url(${element.sectionBg})`,
				}}
				role="img"
				ref={backgroundImageRef}
				id={elementName}
			>
				<Reveal
					className={`row-start-4 md:row-start-2 col-span-10 md:col-span-5  lg:col-span-3 ${
						element.id % 2 === 0
							? "col-start-2 md:col-start-2 lg:col-start-2 md:-ml-8 lg:ml-0"
							: "col-start-2 md:col-start-4 lg:col-start-5 md:mr-8 lg:mr-0"
					} bg-sc-off-white opacity-[80%] p-8 shadow-2xl rounded h-fit backdrop-blur-sm`}
					id={sectionId}
				>
					<h2 className="text-3xl font-Cinzel font-bold mb-4">
						{element.sectionTitle}
					</h2>
					<p className="font-Catamaran sm:text-lg font-medium">
						{element.sectionSubtitle}
					</p>
				</Reveal>
			</div>
		</>
	);
}
