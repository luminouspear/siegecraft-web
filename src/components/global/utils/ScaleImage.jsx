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

	const getRulesForLayout = (lgClassList, defaultClassList) => {
		const windowWidth = window.innerWidth;

		if (windowWidth >= 1024) {
			return lgClassList;
		} else {
			return defaultClassList;
		}
	};

	const [animationBackgroundSize, setAnimationBackgroundSize] = useState({
		start: getRulesForLayout("101%", "301%"),
		end: getRulesForLayout("100%", "300%"),
	});

	const handleResize = () => {
		if (animationRef.current) {
			setAnimationBackgroundSize({
				start: getRulesForLayout("110%", "305%"),
				end: getRulesForLayout("100%", "300%"),
			});
		}
	};

	useEffect(() => {
		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

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
					start: { scale: 1 },
					end: { scale: 1.1 },
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
