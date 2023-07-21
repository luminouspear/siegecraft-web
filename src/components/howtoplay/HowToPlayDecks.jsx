import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
	holdAtPosition,
	HowToPlayMotionContainer,
	HowToPlaySectionSubheading,
	HowToPlaySectionHeading,
} from "./HowToPlaySectionComponents";

const HowToPlayDecks = (props) => {
	const targetRef = useRef(null);
	const [bgImage, setBgImage] = useState(null);
	const [imageSize, setImageSize] = useState(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});
	const springScrollYProgress = useSpring(scrollYProgress);
	const { windowSize, content } = props;

	useEffect(() => {
		content.sectionBg().then((module) => {
			setBgImage(module.default);
		});
	}, []);

	const isWindowLg = () => {
		return windowSize;
	};

	const headingOpacity = useTransform(
		springScrollYProgress,
		content.headingOpacity.inputRange,
		content.headingOpacity.outputRange
	);
	const subheadingOpacity = useTransform(
		springScrollYProgress,
		content.subheadingOpacity.inputRange,
		content.subheadingOpacity.outputRange
	);

	const contentContainerOpacity = useTransform(
		springScrollYProgress,
		content.contentContainerOpacity.inputRange,
		content.contentContainerOpacity.outputRange
	);
	const contentContainerY = useTransform(
		springScrollYProgress,
		content.contentContainerY.inputRange,
		content.contentContainerY.outputRange
	);

	const imageOpacity = useTransform(
		springScrollYProgress,
		content.imageOpacity.inputRange,
		content.imageOpacity.outputRange
	);

	const blockerOpacity = useTransform(
		springScrollYProgress,
		content.blockerOpacity.inputRange,
		content.blockerOpacity.outputRange
	);

	return (
		<section
			className="bg-black h-[250vh] lg:h-[200vh] grid grid-rows-5  grid-cols-12 relative z-0 lg:grid-rows-3 lg:grid-cols-8 "
			ref={targetRef}
		>
			<div className="sticky grid items-start w-full h-full grid-cols-12 col-span-12 col-start-1 grid-rows-3 row-span-2 row-start-1 lg:h-screen lg:items-start lg:row-start-1 lg:grid-rows-5 lg:grid-cols-12 sm:row-span-2 lg:row-span-3 lg:col-start-1 lg:col-span-8 sm:row-start-1 top-32 lg:top-24 ">
				{/* {Animation} */}
				<motion.img
					style={{ opacity: imageOpacity }}
					className="bg-cover object-cover  w-screen h-full lg:top-24   bg-[center_center] col-span-12 col-start-1 row-span-3 row-start-1 lg:row-start-1 lg:col-start-1 lg:col-span-12 lg:row-span-5"
					src={bgImage}
					// srcSet={content.sectionBgSrcSet}
					alt={content.sectionBgAlt}
					loading="lazy"
				/>
			</div>

			<HowToPlayMotionContainer
				style={{
					opacity: isWindowLg
						? contentContainerOpacity
						: blockerOpacity,
					position: isWindowLg
						? holdAtPosition(springScrollYProgress, 0.25, 0.75)
						: "relative",
				}}
				align="bottom-middle"
			>
				<div className="flex col-span-3 col-start-1 row-start-1 md:col-span-4 h-fit z-[2]">
					<HowToPlaySectionHeading
						title={content.sectionTitle}
						style={{
							opacity: headingOpacity,
						}}
					/>
				</div>
				<div className="flex items-start col-start-4 lg:col-start-1 row-span-1 row-start-1 col-span-full  md:col-start-5 sm:mx-6 md:mx-16 lg:mx-0 z-[2]">
					<HowToPlaySectionSubheading
						subheading={content.sectionText}
						style={{ opacity: subheadingOpacity }}
					/>
				</div>
			</HowToPlayMotionContainer>
		</section>
	);
};

export default HowToPlayDecks;
