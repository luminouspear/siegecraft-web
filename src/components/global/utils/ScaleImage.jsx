import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const ScaleImage = (props) => {
	const {
		children,
		className,
        id,
        src,
        alt,
		width = "fit-content",
		style,
		currentImageIndex,
		userInteraction,
	} = props;

	const animationRef = useRef(null);
	const isInView = useInView(animationRef, { once: true });
	const mainControls = useAnimation();

	const getRandomValue = () => {

		const values = [-20, 0, 20]
		const randomIndex = Math.floor(Math.random() * values.length)
		return values[randomIndex]
		}




	useEffect(() => {
		if (isInView) {
			mainControls.start("end");
		}
	}, [isInView]);

	useEffect(() => {
		if (isInView || currentImageIndex) {
			mainControls.set("start");
			mainControls.start("end");
		}
	}, [currentImageIndex]);

	return (
		<div
			id={id}
			className={className}
			ref={animationRef}
			style={{ ...style }}
		>
			<motion.img
				src={src}
				className={` col-start-1 col-span-4 row-span-4 row-start-1 object-cover object-center h-full w-full`}
				alt={alt}
				variants={{
					start: { scale: 1.14, x:getRandomValue(), y:getRandomValue(), delay:3 },
					end: { scale: 1.20, x:getRandomValue(), y:getRandomValue() },
				}}
				initial="start"
				animate={mainControls}
				transition={{ duration: 15, delay: 0, ease: "easeInOut" }}
				style={{ transformOrigin: "50% 100%" }}
			/>
			{children}
		</div>
	);
};
