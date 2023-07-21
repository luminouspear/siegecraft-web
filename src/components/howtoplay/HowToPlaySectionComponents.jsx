import React, { useState, useEffect } from "react";
import { motion, useTransform } from "framer-motion";

export const HowToPlaySectionHeading = ({ title, style }) => {
	return (
		<motion.h2
			style={style}
			className="px-4 mt-8 text-lg font-black sm:px-8 sm:text-xl lg:mt-0 lg:w-full lg:block font-Cinzel md:text-2xl lg:text-2xl lg:px-4 lg:py-0 text-sc-off-white lg:text-sc-dark-black lg:pb-4"
		>
			{title}
		</motion.h2>
	);
};

export const HowToPlaySectionSubheading = ({ subheading, style }) => {
	return (
		<motion.p
			style={style}
			className="px-4 mt-8 text-base font-semibold lg:mt-0 lg:top-auto lg:block lg:w-full font-Catamaran sm:text-lg lg:text-xl lg:px-4 md:text-xl 2xl:text-xl text-sc-off-white lg:text-sc-dark-black lg:pb-4 lg:pt-0"
		>
			{subheading}
		</motion.p>
	);
};

export const HowToPlayMotionContainer = ({
	children,
	style,
	align = "left",
}) => {
	const alignmentValues =
		align === "left"
			? "lg:left-12 lg:top-[50%] "
			: align === "right"
			? " lg:row-start-2 xl:row-start-3 2xl:row-start-4 lg:col-start-5 lg:col-span-2 lg:row-span-1 lg:top-64"
			: align === "top-right"
			? " lg:top-[33%] lg:right-12 2xl:right-16 "
			: align === "top-left"
			? " lg:top-[33%] lg:left-12 2xl:left-16 "
			: align === "bottom-left"
			? "  lg:left-12 2xl:left-16 top-[66%] "
			: align === "bottom-right"
			? "  lg:right-12 2xl:right-16 lg:top-[66%] "
			: align === "bottom-middle"
			? "  lg:left-1/2 lg:-translate-x-1/2 lg:top-[66%] "
			: " ";

	return (
		<motion.div
			className={
				"  grid items-start col-span-12 col-start-1 row-span-1 row-start-2  bg-sc-dark-black top-[75vh] h-[25vh]  lg:bg-sc-off-white grid-flow-row grid-cols-8  grid-rows-1 lg:flex lg:flex-col lg:items-start lg:w-5/12 xl:w-4/12  justify-center " +
				alignmentValues +
				"  z-[2] lg:rounded-xl "
			}
			style={style}
		>
			{/* Large+ Container */}
			{children}
		</motion.div>
	);
};


export const holdAtPosition = (
	scrollYProgress,
	fixedHeight,
	releaseHeight = 1,
	loud = false
) => {
	const hold = useTransform(scrollYProgress, (pos) => {
		loud && console.log(pos);
		return pos < releaseHeight && pos >= fixedHeight && pos > 0
			? "fixed"
			: "relative";
	});
	return hold;
};
export const stickyAtPosition = (
	scrollYProgress,
	fixedHeight,
	releaseHeight = 1,
	loud = false
) => {
	const hold = useTransform(scrollYProgress, (pos) => {
		loud && console.log(pos);
		return pos < releaseHeight && pos >= fixedHeight && pos > 0
			? "sticky"
			: "relative";
	});
	return hold;
};

export const isWindowSize = (size) => {
	const currentWidth = window.innerWidth;

	switch (size) {
		case "xs":
			return currentWidth < 640;
		case "sm":
			return currentWidth >= 640 && currentWidth < 768;
		case "md":
			return currentWidth >= 768 && currentWidth < 1024;
		case "lg":
			return currentWidth >= 1024 && currentWidth < 1280;
		case "xl":
			return currentWidth >= 1280 && currentWidth < 1536;
		case "2xl":
			return currentWidth > 1536;
		default:
			return false;
	}
};
