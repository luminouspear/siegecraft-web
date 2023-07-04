import React, { useState, useEffect } from 'react'
import { motion, useTransform } from 'framer-motion';

export const HowToPlaySectionTitle = ({title, style}) => {
    return (
        <motion.h2
            style={style}
			className=" top-[78vh]   w-1/3 md:w-5/12 2xl:w-full   lg:top-auto lg:block font-Cinzel font-black text-xl md:text-2xl lg:text2xl lg:row-start-1 lg:row-span-1 lg:col-start-1 lg:col-span-1
			lg:w-full text-sc-off-white lg:text-sc-dark-black "
		>
			{title}
		</motion.h2>
  );
}

export const HowToPlaySectionSubheading = ({ subheading, style })=> {
	return (
		<motion.p
			style={style}
			className=" top-[78vh] w-2/3 px-6 lg:top-auto lg:block lg:w-full
			font-Catamaran text-base sm:text-lg lg:text-base xl:text-lg md:pr-16 sm:-translate-x-8 md:translate-x-0  lg:px-0 md:text-xl 2xl:text-xl lg:col-start-1 lg:row-start-2 lg:row-span-2 lg:pt-4 xl:pt-0 lg:pr-4 xl:pr-0
			 text-sc-off-white lg:text-sc-dark-black "
		>
			{subheading}
		</motion.p>
	)
}

export const HowToPlayMotionContainer = ({ children, style, align="left" }) => {
	const alignmentValues =
		align === "left"
			? " lg:left-12 lg:ml-6 xl:ml-12 lg:top-[55vh] "
			: align === "right"
			? " lg:right-12 lg:mr-6 xl:mr-12 lg:top-[55vh] "
			: align === "top-right"
			? " lg:top-36 lg:right-12 "
			: " ";
	return (
		<motion.div
			className={"lg:w-[32%] xl:w-[40%] 2xl:w-4/12 xl:h-44 lg:h-[13rem]  invisible lg:bg-sc-off-white  lg:visible lg:fixed z-[2] lg:p-4 xl:p-8  " + alignmentValues + " rounded-lg lg:opacity-70 lg:backdrop-blur-md lg:grid lg:gap-y-8 xl:gap-y-12 lg:grid-flow-col lg:justify-start  lg:grid-rows-3 lg:grid-cols-1"}
			style={style}

		>
			{/* Large+ Container */}
			{children}
		</motion.div>
	);
}

	export const holdAtPosition = (scrollYProgress, fixedHeight, releaseHeight = 1, loud = false) => {
		const hold = useTransform(scrollYProgress, (pos) => {
			loud && console.log(pos);
			return pos < releaseHeight && pos >= fixedHeight && pos > 0
				? "fixed"
				: "relative";
		});
		return hold;
	};

export const isWindowSize = (size) => {
	const currentWidth = window.innerWidth

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
			return false
	}
}