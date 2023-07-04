import React, { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import { useScroll, motion, useTransform } from "framer-motion";
import {
	holdAtPosition,
	HowToPlaySectionTitle,
	HowToPlaySectionSubheading,
	HowToPlayMotionContainer,
} from "./HowToPlaySectionTitles";

const HowToPlayAttack = (props) => {
	const { content } = props;
	const containerRef = useRef(null);
	const lottieRef = useRef(null);
	const [scrollPosition, setScrollPosition] = useState(window.scrollY);
	const [currentAnimationData, setCurrentAnimationData] = useState(
		content.mobileAnimationData
	);
	const TOTAL_FRAMES = 258;
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const isWindowLg = () => {
		return window.innerWidth >= 640;
	};

	useEffect(() => {
		if (isWindowLg()) {
			setCurrentAnimationData(content.pcAnimationData);
		} else {
			setCurrentAnimationData(content.mobileAnimationData);
		}
	}, []);

	// Listen for resize events and update the state accordingly.
	useEffect(() => {
		const handleResize = () => {
			if (isWindowLg()) {
				setCurrentAnimationData(animationData169);
			} else {
				setCurrentAnimationData(animationDataMobile);
			}
		};

		// Attach the event listener
		window.addEventListener("resize", handleResize);

		// Clean up the event listener on unmount
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const subtitleOpacity = useTransform(
		scrollYProgress,
		[0.0, 0.1, 0.15, 0.25],
		[0, 0, 1, 0]
	);

	const titleOpacity = useTransform(
		scrollYProgress,
		[0.22, 0.26, 0.6, 0.64],
		[0, 1, 1, 0]
	);
	const contentOpacity = useTransform(
		scrollYProgress,
		[0.35, 0.35, 0.58, 0.63],
		[0, 1, 1, 0]
	);
	const blockerOpacity = useTransform(
		scrollYProgress,
		[0, 0.22, 0.28, 0.62, 0.65],
		[0, 0, 1, 1, 0]
	);

	const animationOpacity = useTransform(
		scrollYProgress,
		[0, 0.22, 0.75, 0.8],
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
				position: holdAtPosition(scrollYProgress, 0.33, 0.83),
			}}
		/>
	);
	const sectionSubheading = (
		<HowToPlaySectionSubheading
			subheading={content.sectionText}
			style={{
				opacity: contentOpacity,
				position: holdAtPosition(scrollYProgress, 0.35, 0.83),
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

		if (containerRef.current) {
			const { offsetTop, scrollHeight } = containerRef.current;

			const targetScroll = 0.6 * scrollHeight;
			const endingFrame = TOTAL_FRAMES;

			console.log((scrollPosition - offsetTop) / scrollHeight);

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
		<div
			className="bg-black h-[300vh] sm:h-[300vh] grid grid-rows-5 sm:grid-rows-[repeat(10,_minmax(0,1fr))] grid-cols-12 relative z-0"
			ref={containerRef}
		>
			<motion.h2
				className={`text-2xl text-sc-off-white font-Cinzel mx-auto col-span-12 col-start-1 row-span-1 row-start-1 sticky top-[45%] text-center self-start`}
				style={{ opacity: subtitleOpacity }}
			>
				{content.sectionSubtitle}
			</motion.h2>
			<motion.div
				className="sticky col-span-12 col-start-1 row-span-1 row-start-2 bg-sc-dark-black top-[75vh] z-[1] lg:hidden grid grid-flow-row grid-cols-8 grid-rows-1 "
				style={{ opacity: blockerOpacity }}
			>
				<div className="sticky col-span-3 col-start-1 row-start-1 flex align-top top-[75vh]  self-start h-fit lg:hidden p-4 z-[2] ">
					{sectionTitle}
				</div>
				<div className="sticky flex items-start col-span-5 col-start-4 row-span-1 row-start-1  lg:hidden sm:mx-6 md:mx-16 z-[2] ">
					{sectionSubheading}
				</div>
			</motion.div>
			<motion.div
				className="sticky self-start w-full col-span-12 col-start-1 row-span-1 row-start-1 sm:row-span-2 sm:row-start-1 h-fit top-32 lg:top-24 "
				style={{ opacity: animationOpacity }}
			>
				{/* {Animation} */}
				<Lottie
					animationData={currentAnimationData}
					lottieRef={lottieRef}
				/>
			</motion.div>
			<HowToPlayMotionContainer
				style={{
					opacity: contentContainerOpacity,
					y: contentContainerY,
				}}
				align={"left"}
			>
				{/* Large+ Container */}
				{sectionTitle}
				{sectionSubheading}
			</HowToPlayMotionContainer>
		</div>
	);
};

export default HowToPlayAttack;
