import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { HowToPlayMotionContainer, HowToPlaySectionSubheading, HowToPlaySectionTitle } from "./HowToPlaySectionTitles";

const HowToPlayDecks = (props) => {
	const targetRef = useRef(null);
	const imageRef = useRef(null);
	const [imageSize, setImageSize] = useState(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});
	const { content } = props;

	const [paddingTop, setPaddingTop] = useState("8rem");

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
				position: holdAtPosition(0.35, 0.83, false),
			}}
		/>
	);

	const sectionSubheading = (
		<HowToPlaySectionSubheading
			subheading={content.sectionText}
			style={{
				opacity: contentOpacity,
				position: holdAtPosition(0.35, 0.83, false),
			}}
		/>
	);

	return (
		<section
			className="relative lg:h-[220vh] h-[240vh]  lg:pb-0
			 min-w-full bg-black grid grid-flow-col
			grid-rows-[repeat(12,_minmax(0,1fr))]
			grid-cols-12 gap-x-8  lg:grid-rows-4 lg:grid-cols-8 "
			ref={targetRef}
		>
			<div
				className=" sticky top-32 lg:top-0   col-span-12  col-start-1 row-span-3 row-start-1
			 bg-black lg:row-span-2 lg:row-start-1 lg:col-start-1 lg:h-full lg:col-span-8  lg:z-[1]  grid grid-rows-1 grid-cols-1 "
			>
				<motion.img
					style={{ opacity: imageOpacity }}
					className="bg-cover object-cover  w-screen h-full lg:top-24   bg-[center_center] col-span-1 col-start-1 row-span-1 row-start-1"
					src={content.sectionBg}
					srcSet={content.sectionBgSrcSet}
					alt={content.sectionBgAlt}
					loading="lazy"
				/>
			</div>
			<HowToPlayMotionContainer
			style={{
				opacity: contentContainerOpacity,
				y: contentContainerY,
			}}>
				{/* Large+ Container */}
				{sectionTitle}
				{sectionSubheading}
			</HowToPlayMotionContainer>
			<div className="flex items-start col-span-4 col-start-1 row-span-1 row-start-4 ml-4 align-top lg:hidden sm:mx-6 md:mx-16 ">
				{sectionTitle}
			</div>
			<div
				className="flex items-start  row-start-4 row-span-1 col-start-5 col-span-8 lg:hidden
			sticky   mr-4  sm:mx-6 md:mx-16 pb-[0rem] "
			>
				{sectionSubheading}
			</div>
		</section>
	);
};

export default HowToPlayDecks;
