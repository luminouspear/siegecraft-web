import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { bg_texture_light, bg_texture_dark } from "../../assets";
import { Reveal } from "../global/utils/Reveal";
import { useCycleIndex } from "../global/utils/useCycleIndex";
// import ElementsImageGallery from "./ElementsImageGallery";
const ElementsImageGallery = lazy(() => import("./ElementsImageGallery"));
// const ElementDetailContentComponent = lazy(() => import('./ElementDetailContentComponent'))

export function ElementDetailContentComponent(props) {
	const { element, currentGlobalElementInView, setCurrentElementInView } =
		props;

	// const cardImages = Object.values(
	// 	Object.values(featuredCardImages)[0][element.sectionElement]
	// );

	const [isElementInView, setIsElementInView] = useState(null);
	const [hasElementLoaded, setHasElementLoaded] = useState(false);
	const [currentBgTexture, setCurrentBgTexture] = useState(null);

	const detailRef = useRef(null);

	useEffect(() => {
		if (
			currentGlobalElementInView === element.sectionElement.toLowerCase()
		) {
			setIsElementInView(true);
			setHasElementLoaded(true);
		} else {
			setIsElementInView(false);
		}
	}, [currentGlobalElementInView]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					setCurrentElementInView(
						element.sectionElement.toLowerCase()
					);
				});
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0,
			}
		);

		if (detailRef.current) {
			observer.observe(detailRef.current);
		}
		return () => {
			observer.disconnect();
		};
	}, []);

	const isEven = element.id % 2 === 0;

	useEffect(() => {
		if (isEven) {
			bg_texture_dark().then((module) => {
				setCurrentBgTexture(module.default);
			});
		} else {
			bg_texture_light().then((module) => {
				setCurrentBgTexture(module.default);
			});
		}

		return () => {};
	}, []);

	return (
		<div
			className="mx-auto flex min-h-fit md:inline-flex bg-cover bg-[center_center] bg-no-repeat w-full shadow-inner justify-center"
			style={{
				backgroundImage: `url(${currentBgTexture})`,
			}}
			ref={detailRef}
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
					<h2 className="mb-4 text-2xl font-bold font-Cinzel">
						{element.featuredSectionHeader}
					</h2>
					<p
						className="sm:mb-0 sm:text-lg"
						dangerouslySetInnerHTML={{
							__html: element.featuredSectionText,
						}}
					/>
				</Reveal>
				<Suspense fallback={<div>Loading...</div>}>
					<Reveal
						className={` mx-auto px-2 md:p-4 lg:p-8 xl:p-16 2xl:p-24 md:mb-0
	                                                        ${
																isEven
																	? "md:order-2"
																	: "md:order-1"
															}`}
					>
						{
							<ElementsImageGallery
								element={element}
								isElementInView={isElementInView}
								isEven={isEven}
								hasElementLoaded={hasElementLoaded}
								currentGlobalElementInView={
									currentGlobalElementInView
								}
								setCurrentElementInView={
									setCurrentElementInView
								}
							/>
						}
					</Reveal>
				</Suspense>
			</div>
		</div>
	);
}
