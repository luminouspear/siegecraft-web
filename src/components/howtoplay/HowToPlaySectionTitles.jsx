import React, { useState, useEffect } from "react";
import { motion, useTransform } from "framer-motion";

export const HowToPlaySectionTitle = ({ title, style }) => {
	return (
		<motion.h2
			style={style}
			className="px-4 text-lg font-black sm:px-8 sm:text-xl lg:w-full lg:top-auto lg:block font-Cinzel md:text-2xl lg:text-2xl lg:px-4 lg:py-4 text-sc-off-white lg:text-sc-dark-black"
		>
			{title}
		</motion.h2>
	);
};

export const HowToPlaySectionSubheading = ({ subheading, style }) => {
	return (
		<motion.p
			style={style}
			className="px-4 text-base font-medium lg:top-auto lg:block lg:w-full font-Catamaran sm:text-lg lg:text-base xl:text-lg lg:px-4 md:text-xl lg:absolute lg:bottom-4 2xl:text-xl text-sc-off-white lg:text-sc-dark-black lg:pb-4 lg:pt-4"
		>
			{subheading}
		</motion.p>
	);
};

export const HowToPlayMotionContainer = ({
	children,
	style,
	align = "left",
	lg = false,
}) => {
	const alignmentValues =
		align === "left"
			? " lg:row-start-2 xl:row-start-3 2xl:row-start-4 lg:col-start-1 lg:col-span-4 lg:row-span-1 xl:col-start-1 xl:col-span-4 xl:row-start-3 xl:row-span-1 "
			: align === "right"
			? " lg:row-start-2 xl:row-start-3 2xl:row-start-4 lg:col-start-8 lg:col-span-4 lg:row-span-1 "
			: align === "top-right"
			? " lg:row-start-1 xl:row-start-1 2xl:row-start-2 lg:col-start-8 lg:col-span-4 lg:row-span-1 "
			: align === "bottom-left"
			? "  lg:row-start-2 lg:mt-24 xl:row-start-3 xl:mt-8 2xl:mt-24 2xl:row-start-3 lg:col-start-1 lg:col-span-4 lg:row-span-1 xl:col-start-1 xl:col-span-4 xl:row-start-3 xl:row-span-1 "
			: " ";

	return (
		<motion.div
			className={
				" invisible lg:bg-sc-off-white  lg:visible  z-[2]  " +
				alignmentValues +
				" hidden lg:block bg-white  z-[2] top-0 h-fit w-full mx-12 rounded"
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
