import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

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
			console.log(
				"🚀 ~ file: HowToPlayDecks.jsx:33 ~ handleResize ~ imageHeight:",
				imageHeight
			);
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
		[0.36, 0.38, 0.71, 0.76],
		[0, 1, 1, 0]
	);
	const contentOpacity = useTransform(
		scrollYProgress,
		[0.5, 0.55, 0.74, 0.78],
		[0, 1, 1, 0]
	);

	const contentContainerOpacity = useTransform(
		scrollYProgress,
		[0.33, 0.37, 0.69, 0.74],
		[0, .8, .8, 0]
	);
	const contentContainerY = useTransform(
		scrollYProgress,
		[0.33, 0.37, 0.38, 0.67, 0.68, 0.73],
		[120, 20, 20, -20, -20, -120]
	);

	const imageOpacity = useTransform(
		scrollYProgress,
		[0.1, 0.15, 0.22, 0.68, 0.73],
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
		<motion.h2
			style={{
				opacity: titleOpacity,
				position: holdAtPosition(0.35, 0.83, false),
			}}
			className=" top-[78vh]   w-1/3    lg:top-auto lg:block md:w-4/12 font-Cinzel text-xl lg:text-5xl
			lg:w-full text-sc-off-white lg:text-sc-dark-black lg:px-8 lg:py-8"
		>
			{content.sectionTitle}
		</motion.h2>
	);

	const sectionSubheading = (
		<motion.p
			style={{
				opacity: contentOpacity,
				position: holdAtPosition(0.35, 0.83, false),
			}}
			className=" top-[78vh] w-2/3 px-6 lg:top-auto lg:block lg:w-full
			font-Catamaran text-base sm:text-lg md:pr-16 sm:-translate-x-8 lg:text-2xl 2xl:text-[1.8rem] lg:ml-8 lg:px-8 xl:px-12
			 text-sc-off-white lg:text-sc-dark-black lg:mt-[15%]"
		>
			{content.sectionText}
		</motion.p>
	);

	return (
		<section
			className="relative lg:h-[300vh] h-[240vh] pb-8 mb-[100vh] 🇨🇦 min-w-full bg-black grid grid-flow-col  grid-rows-[repeat(12,_minmax(0,1fr))]
			grid-cols-12 gap-x-8  lg:grid-rows-3 lg:grid-cols-8 "
			ref={targetRef}
		>
			<div className=" sticky top-[128px] lg:top-0  col-span-12  col-start-1 row-span-3 row-start-1
			 bg-black lg:row-span-1 lg:row-start-1 lg:col-start-1 lg:h-full lg:col-span-8  lg:z-[1]  grid grid-rows-1 grid-cols-1 ">
				<motion.img
					style={{ opacity: imageOpacity,  }}
					className="bg-cover object-cover  w-screen h-full lg:top-24   bg-[center_center] col-span-1 col-start-1 row-span-1 row-start-1"
					src={content.sectionBg}
					srcSet={content.sectionBgSrcSet}
					alt={content.sectionBgAlt}
					loading="lazy"
				/>
			</div>
			<motion.div
				className="lg:w-[56%] xl:w-[47%] 2xl:w-4/12 lg:h-[16rem]  invisible lg:bg-sc-off-white  lg:visible lg:fixed z-[2] lg:top-[48vh]  lg:ml-6 xl:ml-12 rounded-lg lg:opacity-70 lg:backdrop-blur-md lg:flex  lg:flex-row lg:justify-center lg:items-start "
				style={{
					opacity: contentContainerOpacity,
					y: contentContainerY,
				}}
			>
				{/* Large+ Container */}
				{sectionTitle}
				{sectionSubheading}
			</motion.div>
			<div className="flex items-start col-span-4 col-start-1 row-span-1 row-start-4 ml-4 align-top lg:hidden md:ml-16 ">
				{sectionTitle}
			</div>
			<div className="flex items-start  row-start-4 row-span-1 col-start-5 col-span-8 lg:hidden lg:top-[48vh]  sticky  lg:z-[3] mr-4  sm:mx-6 md:mx-16 pb-[0rem] ">
				{sectionSubheading}
			</div>
		</section>
	);


};

export default HowToPlayDecks;


