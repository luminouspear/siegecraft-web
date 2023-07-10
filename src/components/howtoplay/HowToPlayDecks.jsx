import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
	HowToPlayMotionContainer,
	HowToPlaySectionSubheading,
	HowToPlaySectionTitle,
} from "./HowToPlaySectionComponents";

const HowToPlayDecks = (props) => {
	const targetRef = useRef(null);
	const imageRef = useRef(null);
	const [bgImage, setBgImage] = useState(null);
	const [imageSize, setImageSize] = useState(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});
	const { content } = props;

	const [paddingTop, setPaddingTop] = useState("8rem");

	useEffect(() => {
		content.sectionBg().then((module) => {
			setBgImage(module.default);
		});
	}, []);

	const getRulesForLayout = (lgClassList, defaultClassList) => {
		const windowWidth = window.innerWidth;

		if (windowWidth >= 1024) {
			return lgClassList;
		} else {
			return defaultClassList;
		}
	};

	const isWindowLg = () => {
		return window.innerWidth >= 1024;
	};

	const handleResize = () => {
		const newPaddingTop = getRulesForLayout("6rem", "8rem");
		if (imageRef.current) {
			const imageHeight = imageRef.current.offsetHeight;
			setImageSize(imageHeight);
		}
		setPaddingTop(newPaddingTop);
	};

	useEffect(() => {
		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const titleOpacity = useTransform(
		scrollYProgress,
		[0.36, 0.38, 0.69, 0.74],
		[0, 1, 1, 0]
	);
	const contentOpacity = useTransform(
		scrollYProgress,
		[0.5, 0.55, 0.67, 0.72],
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

	const imageOpacity = useTransform(
		scrollYProgress,
		[0.1, 0.15, 0.22, 0.68, 0.76],
		[0, 0.2, 1, 1, 0]
	);

	const blockerOpacity = useTransform(
		scrollYProgress,
		[0, 0.35, 0.37, 0.68, 0.7],
		[0, 0, 1, 1, 0]
	);

	const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);
	const holdAtPosition = (fixedHeight, releaseHeight = 1, loud = false) => {
		const hold = useTransform(scrollYProgress, (pos) => {
			loud && console.log(pos);
			return pos < releaseHeight && pos >= fixedHeight
				? "fixed"
				: "relative";
		});
		return hold;
	};
	const releaseFixedBackgroundPosition = useTransform(
		scrollYProgress,
		(pos) => {
			return pos === 1 ? "relative" : "fixed";
		}
	);

	useEffect(() => {
		const handleResizeImage = (entries) => {
			for (let entry of entries) {
				const imageHeight = entry.target.offsetHeight;
			}
		};
	}, [scrollYProgress.current]);

	const sectionTitle = (
		<HowToPlaySectionTitle
			title={content.sectionTitle}
			style={{
				opacity: titleOpacity,
				position: isWindowLg
					? "relative"
					: holdAtPosition(0.35, 0.83, false),
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
					: holdAtPosition(0.35, 0.83, false),
			}}
		/>
	);

	return (
		<section
			className="bg-black h-[250vh] grid grid-rows-5  grid-cols-12 relative z-0 lg:grid-rows-3 lg:grid-cols-8"
			ref={targetRef}
		>
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
				<HowToPlayMotionContainer
					style={{ opacity: contentContainerOpacity }}
					align="top-middle"
				>
					{sectionTitle}
					{sectionSubheading}
				</HowToPlayMotionContainer>
			</div>
		</section>
	);
};

export default HowToPlayDecks;
