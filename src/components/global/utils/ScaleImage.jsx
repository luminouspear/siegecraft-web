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
        start: getRulesForLayout("130%", "320%"),
        end: getRulesForLayout("110%", "300%")
    })

    const handleResize = () => {
        if (animationRef.current) {
            setAnimationBackgroundSize({
				start: getRulesForLayout("130%", "320%"),
				end: getRulesForLayout("110%", "300%"),
			});
        }
    }

    useEffect(() => {
        handleResize();

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    },[])

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
			transition={{ duration: 7, delay: 0 }}
			className={className}
			id={id}
			ref={animationRef}
			style={{ ...style }}
		>
			{children}
		</motion.div>
	);
};
