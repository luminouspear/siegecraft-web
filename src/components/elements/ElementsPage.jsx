import React, { useState, useEffect, useRef } from "react";
import {
	iconEarthWhite,
	iconAirWhite,
	iconFireWhite,
	iconLightWhite,
	iconShadowWhite,
	iconWaterWhite,
} from "../../assets";
import { elementPageSectionContent, elementPageInfo } from "../../constants";
import { useContext } from "react";
import { CardContext } from "../../context/CardContext";
import ContactSection from "../global/ContactSection";
import FooterSection from "../global/FooterSection";
import { ElementsContent } from "./ElementsContent";
import { Link, useLocation } from "react-router-dom";

const ElementsPage = () => {
	const { cards, getCardById } = useContext(CardContext);
	const [isScrolled, setIsScrolled] = useState(false);
	const containerRef = useRef(null);
	const scrollRef = useRef(null);
	const originalTop = useRef(0);
	const originalBottom = useRef(0);
	const [featuredCardImages, setFeaturedCardImages] = useState({});
	const [currentElementInView, setCurrentElementInView] = useState(null);
	const elementRefs = useRef({});
	const location = useLocation();

	useEffect(() => {
		const fetchFeaturedCards = async () => {
			const newFeaturedCardImages = {};

			for (const element of elementPageInfo) {
				if (Array.isArray(element.featuredCardId)) {
					newFeaturedCardImages[element.sectionElement] = {};

					for (const cardId of element.featuredCardId) {
						const card = await getCardById(cardId);

						if (card && card.imageUrl) {
							newFeaturedCardImages[element.sectionElement][
								cardId
							] = card.imageUrl;
						}
					}
				} else {
					const card = await getCardById(element.featuredCardId);

					if (card && card.imageUrl) {
						newFeaturedCardImages[element.featuredCardId] =
							card.imageUrl;
					}
				}
			}
			setFeaturedCardImages(newFeaturedCardImages);
		};
		fetchFeaturedCards();
	}, [elementPageInfo, getCardById]);

	const checkScrollTop = () => {
		const containerRect = containerRef.current.getBoundingClientRect();
		const stickyRect = scrollRef.current.getBoundingClientRect();

		if (!originalTop.current) {
			originalTop.current = stickyRect.top;
		}

		if (!originalBottom.current) {
			originalBottom.current = containerRect.bottom;
		}

		if (!isScrolled && stickyRect.top <= 96) {
			setIsScrolled(true);
		} else if (containerRect.bottom > 96) {
			setIsScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", checkScrollTop);
		return () => window.removeEventListener("scroll", checkScrollTop);
	}, [isScrolled]);

	function scrollToElement(id) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}

	useEffect(() => {
		if (location.hash) {
			const id = location.hash.replace("#", "");
			scrollToElement(id);
		}
	}, [location]);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "300px 0px 0px 0px",
			threshold: 1,
		};

		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setCurrentElementInView(
						entry.target.id.replace("-section", "")
					);
				}
			});
		}, options);

		const elementNames = elementPageInfo.map((element) =>
			element.sectionElement.toLowerCase()
		);
		elementNames.forEach((elementName) => {
			const element = document.getElementById(
				elementName.toLowerCase() + "-section"
			);
			if (element) {
				elementRefs.current[elementName] = element;

				observer.observe(element);
			}
		});

		return () => {
			if (observer) {
				for (let elementName in elementRefs.current) {
					observer.unobserve(elementRefs.current[elementName]);
				}
			}
		};
	}, []);

	return (
		<>
			<div className="inline-block w-full">
				<div
					ref={containerRef}
					className="mx-auto pt-12 pb-4 bg-sc-dark-black flex justify-center flex-col align-middle items-center "
				>
					<h1
						className="text-center text-2xl md:text-4xl font-Cinzel text-sc-off-white"
						dangerouslySetInnerHTML={{
							__html: elementPageSectionContent.title,
						}}
					/>
					<p
						className="text-center font-Catamaran px-12 text-lg md:text-2xl text-sc-off-white pt-6 w-full lg:w-5/6 xl:w-1/2 2xl:w-5/12"
						dangerouslySetInnerHTML={{
							__html: elementPageSectionContent.subTitle,
						}}
					/>
				</div>
				<div
					ref={scrollRef}
					className={`${
						isScrolled ? "fixed top-24" : "block"
					} z-10 w-full bg-sc-dark-black flex justify-center pb-4`}
				>
					<div
						className={`${
							isScrolled
								? "lg:w-6/12 xl:w-5/12 2xl:w-5/12"
								: "lg:w-7/12 xl:w-1/2 2xl:w-5/12"
						} grid grid-cols-6 px-4 sm:px-8 pt-8  w-full  h-auto transition-all duration-500 ease-in-out`}
					>
						{elementPageSectionContent.icons.map((element) => {
							const ElementIcon = element.elementIcon;
							return (
								<Link
									className={` col-start-${element.id} col-span-1 flex flex-col items-center`}
									key={element.id}
									to={{
										hash: `#${element.elementName.toLowerCase()}`,
									}}
								>
									<ElementIcon
										className={`${
											isScrolled
												? "h-5 md:h-8"
												: "h-9 md:h-12"
										} transition-all duration-500 ease-in-out text-sc-off-white hover:text-${
											element.elementFill
										}`}
									/>
									<h3
										className={`${
											isScrolled &&
											currentElementInView &&
											element.elementName.toLowerCase() !==
												currentElementInView.toLowerCase()
												? "invisible hover:visible"
												: ""
										} font-Cinzel text-sm sm:text-base text-sc-off-white pt-2 hover:text-${
											element.elementFill
										}`}
									>
										{element.elementName}
									</h3>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
			{ElementsContent(
				featuredCardImages,
				currentElementInView,
				isScrolled
			)}
			<ContactSection />
			<FooterSection />
		</>
	);
};

export default ElementsPage;
