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
import ElementPageIconComponent from "./ElementPageIconComponent";
import ContactSection from "../global/ContactSection";
import FooterSection from "../global/FooterSection";
import { ElementsContent } from "./ElementsContent";
import { Link, useLocation } from "react-router-dom";

const ElementsPage = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const introContainerRef = useRef(null);
	const elementsBannerRef = useRef(null);
	const originalTop = useRef(0);
	const originalBottom = useRef(0);
	const [featuredCardImages, setFeaturedCardImages] = useState({});
	const [currentElementInView, setCurrentElementInView] = useState(null);
	const [hovered, setHovered] = useState(false);

	const location = useLocation();

	const checkScrollTop = () => {
		const containerRect = introContainerRef.current.getBoundingClientRect();
		const stickyRect = elementsBannerRef.current.getBoundingClientRect();

		if (!originalTop.current) {
			originalTop.current = stickyRect.top;
		}

		if (!originalBottom.current) {
			originalBottom.current = containerRect.bottom;
		}

		if (!isScrolled && stickyRect.top < 96) {
			setIsScrolled(true);
		} else if (isScrolled && containerRect.bottom >= 96) {
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
			console.log(element.id);
			const elementsBanner = elementsBannerRef.current;
			const elementsBannerRect = elementsBanner.getBoundingClientRect();
			const targetRect = element.getBoundingClientRect();

			const scrollTop =
				window.scrollY ||
				document.documentElement.scrollTop ||
				document.body.scrollTop ||
				0;

			console.log(
				scrollTop,
				elementsBannerRect.top,
				targetRect.top,
				window.scrollY
			);

			let targetScrollTop;

			if (element.id === "earth") {
				// Directly use the targetRect top position without any offsets
				targetScrollTop = scrollTop + targetRect.top + targetRect.height
			} else {
				// For other elements, subtract the elementsBanner's bottom position
				targetScrollTop =
					scrollTop + targetRect.top - elementsBannerRect.bottom;
			}

			window.scrollTo({
				top: targetScrollTop,
				behavior: "smooth",
			});

			setIsScrolled(true);
			// element.scrollIntoView({ behavior: "smooth", top: targetScrollTop });
		}
	}

	useEffect(() => {
		if (location.hash) {
			const id = location.hash.replace("#", "");
			scrollToElement(id);
		} else if (location.pathname === "/elements") {
			window.scrollTo(0, 0);
		}
	}, [location]);

	return (
		<>
			<div className="inline-block w-full">
				<div
					ref={introContainerRef}
					className={`mx-auto pt-12 pb-4 bg-sc-dark-black  justify-center flex-col align-middle items-center ${
						isScrolled ? "invisible" : "flex"
					}`}
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
					ref={elementsBannerRef}
					className={`${
						isScrolled ? "fixed top-24" : "block"
					} z-10 w-full bg-sc-dark-black  flex justify-center pb-4`}
				>
					<div
						className={`${
							isScrolled
								? "lg:w-6/12 xl:w-5/12 2xl:w-5/12"
								: "lg:w-7/12 xl:w-1/2 2xl:w-5/12"
						} grid grid-cols-6 px-4 sm:px-8 pt-8  w-full  h-auto transition-all duration-500 ease-in-out justify-center items-center `}
					>
						{elementPageSectionContent.icons.map((element) => (
							<ElementPageIconComponent
								key={element.id}
								element={element}
								isScrolled={isScrolled}
								currentGlobalElementInView={
									currentElementInView
								}
							/>
						))}
					</div>
				</div>
			</div>

			<ElementsContent
				featuredCardImages={featuredCardImages}
				currentGlobalElementInView={currentElementInView}
				setCurrentElementInView={setCurrentElementInView}
				isScrolled={isScrolled}
			/>

			<ContactSection />
			<FooterSection />
		</>
	);
};

export default ElementsPage;
