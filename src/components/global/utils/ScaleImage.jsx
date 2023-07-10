import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const ScaleImage = (props) => {
	const {
		children,
		className,
		id,
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
		<motion.div
			variants={{
				start: { backgroundSize: animationBackgroundSize.start },
				end: { backgroundSize: animationBackgroundSize.end },
			}}
			initial="start"
			animate={mainControls}
			transition={{ duration: 15, delay: 0, ease: "easeInOut" }}
			className={className}
			id={id}
			ref={animationRef}
			style={{ ...style, transformOrigin: "50% 100%" }}
		>
			{children}
		</motion.div>
	);
};
