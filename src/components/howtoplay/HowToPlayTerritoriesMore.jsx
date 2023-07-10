import React, { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import { useScroll, motion, useTransform } from "framer-motion";
import {
	holdAtPosition,
	HowToPlaySectionTitle,
	HowToPlaySectionSubheading,
	HowToPlayMotionContainer,
} from "./HowToPlaySectionComponents";

const HowToPlayTerritoriesMore = (props) => {
	const { content } = props;
	const targetRef = useRef(null);
	const lottieRef = useRef(null);
	const [scrollPosition, setScrollPosition] = useState(window.scrollY);
	const [currentAnimationData, setCurrentAnimationData] = useState(null);
	const TOTAL_FRAMES = 59;
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});

	const isWindowLg = () => {
		return window.innerWidth >= 1024;
	};

	useEffect(() => {
		if (isWindowLg()) {
			content.pcAnimationData().then((module) => {
				setCurrentAnimationData(module.default);
			});
		} else {
			content.mobileAnimationData().then((module) => {
				setCurrentAnimationData(module.default);
			});
		}
	}, []);

	// Listen for resize events and update the state accordingly.
	useEffect(() => {
		const handleResize = () => {
			if (isWindowLg()) {
				content.pcAnimationData().then((module) => {
					setCurrentAnimationData(module.default);
				});
			} else {
				content.mobileAnimationData().then((module) => {
					setCurrentAnimationData(module.default);
				});
			}
		};

		// Attach the event listener
		window.addEventListener("resize", handleResize);

		// Clean up the event listener on unmount
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const subtitleOpacity = useTransform(
		scrollYProgress,
		[0.0, 0.18, 0.2, 0.35],
		[0, 0, 1, 0]
	);

	const titleOpacity = useTransform(
		scrollYProgress,
		[0.22, 0.3, 0.73, 0.74],
		[0, 1, 1, 0]
	);
	const contentOpacity = useTransform(
		scrollYProgress,
		[0.35, 0.35, 0.71, 0.72],
		[0, 1, 1, 0]
	);
	const blockerOpacity = useTransform(
		scrollYProgress,
		[0, 0.28, 0.33, 0.68, 0.7],
		[0, 0, 1, 1, 0]
	);

	const animationOpacity = useTransform(
		scrollYProgress,
		[0.3, 0.35, 0.75, 0.8],
		[0, 1, 1, 0]
	);

	const contentContainerOpacity = useTransform(
		scrollYProgress,
		[0.33, 0.37, 0.65, 0.7],
		[0, 0.8, 0.8, 0]
	);
	const contentContainerY = useTransform(
		scrollYProgress,
		[0.33, 0.37, 0.38, 0.67, 0.78, 0.83],
		[120, 20, 20, -20, -20, -120]
	);

	const sectionTitle = (
		<HowToPlaySectionTitle
			title={content.sectionTitle}
			style={{
				opacity: titleOpacity,
				position: isWindowLg
					? "relative"
					: holdAtPosition(scrollYProgress, 0.33, 0.83),
			}}
		/>
	);
	const sectionSubheading = (
		<HowToPlaySectionSubheading
			subheading={content.sectionText}
			style={{
				opacity: contentOpacity,
				position: isWindowLg
					? "relative"
					: holdAtPosition(scrollYProgress, 0.35, 0.83),
			}}
		/>
	);

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const lottie = lottieRef.current;

		if (targetRef.current) {
			const { offsetTop, scrollHeight } = targetRef.current;

			const targetScroll = 0.6 * scrollHeight;
			const endingFrame = TOTAL_FRAMES;

			// console.log((scrollPosition - offsetTop) / scrollHeight);

			const frame =
				((scrollPosition - offsetTop) / targetScroll) * TOTAL_FRAMES;
			if (lottie) {
				lottie.goToAndStop(frame, true);
				if ((scrollPosition - offsetTop) / scrollHeight > 0.6) {
					lottie.goToAndStop(endingFrame, true);
				}
			}
		}
	}, [scrollPosition]);

	return (
		<section
			className="bg-black h-[250vh] grid grid-rows-5  grid-cols-12 relative z-0 lg:grid-rows-3 lg:grid-cols-8"
			ref={targetRef}
		>
			<motion.h2
				className={`text-2xl text-sc-off-white font-Cinzel mx-auto col-span-12 col-start-1 row-span-1 row-start-1 sticky top-[45%] self-start text-center`}
				style={{ opacity: subtitleOpacity }}
			>
				{content.sectionSubtitle}
			</motion.h2>
			<motion.div
				className="sticky col-span-12 col-start-1 row-span-1 row-start-2 bg-sc-dark-black top-[75vh] h-[25vh] z-[1] lg:hidden grid grid-flow-row grid-cols-8 grid-rows-1 justify-center items-center"
				style={{ opacity: blockerOpacity }}
			>
				<div className="col-span-3 md:col-span-4 col-start-1 row-start-1 flex h-fit lg:hidden z-[1] ">
					{sectionTitle}
				</div>
				<div className="flex items-start col-span-full col-start-4 md:col-start-5 row-span-1 row-start-1  lg:hidden sm:mx-6 md:mx-16 z-[2] ">
					{sectionSubheading}
				</div>
			</motion.div>
			<motion.div
				className="sticky grid items-start w-full h-full grid-cols-12 col-span-12 col-start-1 grid-rows-3 row-span-2 row-start-1 lg:h-screen lg:items-start lg:row-start-1 lg:grid-rows-5 lg:grid-cols-12 sm:row-span-1 lg:row-span-3 lg:col-start-1 lg:col-span-8 sm:row-start-1 top-32 lg:top-24 "
				style={{ opacity: animationOpacity }}
			>
				{/* {Animation} */}
				<Lottie
					animationData={currentAnimationData}
					lottieRef={lottieRef}
					className="col-span-12 col-start-1 row-span-3 row-start-1 lg:row-start-1 lg:col-start-1 lg:col-span-12 lg:row-span-5"
				/>
				<HowToPlayMotionContainer
					style={{ opacity: contentContainerOpacity }}
					align="left"
				>
					{sectionTitle}
					{sectionSubheading}
				</HowToPlayMotionContainer>
			</motion.div>
		</section>
	);
};

export default HowToPlayTerritoriesMore;
