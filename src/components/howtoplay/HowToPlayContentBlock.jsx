import React, { useState, useRef, useEffect } from "react";
import {
	motion,
	useScroll,
	useTransform,
	useSpring,
	spring,
    MotionValue,
} from "framer-motion";
import {
	holdAtPosition,
	HowToPlayMotionContainer,
	HowToPlaySectionHeading,
	HowToPlaySectionSubheading,
} from "./HowToPlaySectionComponents";
import Lottie from "lottie-react";

const HowToPlayContentBlock = (props) => {
	const targetRef = useRef(null);
	const lottieRef = useRef(null);
	const [scrollPosition, setScrollPosition] = useState(window.scrollY);
	const [animationData, setAnimationData] = useState(null);
	const { windowSize, content } = props;
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: content.offset,
	});
	const springScrollYProgress = useSpring(scrollYProgress);

	const isWindowLg = () => {
		return windowSize;
	};

	const headingOpacity = useTransform(
		springScrollYProgress,
		content.headingOpacity.inputRange,
		content.headingOpacity.outputRange
	);
	const sectionTitleOpacity = useTransform(
		springScrollYProgress,
		content.sectionTitleOpacity.inputRange,
		content.sectionTitleOpacity.outputRange
	);
	const subheadingOpacity = useTransform(
		springScrollYProgress,
		content.subheadingOpacity.inputRange,
		content.subheadingOpacity.outputRange
	);
	const contentContainerOpacity = useTransform(
		springScrollYProgress,
		content.contentContainerOpacity.inputRange,
		content.contentContainerOpacity.outputRange
	);
	const blockerOpacity = useTransform(
		springScrollYProgress,
		content.blockerOpacity.inputRange,
		content.blockerOpacity.outputRange
	);
	const animationOpacity = useTransform(
		springScrollYProgress,
		content.animationOpacity.inputRange,
		content.animationOpacity.outputRange
	);
	const contentContainerY = useTransform(
				springScrollYProgress,
				content.contentContainerY.inputRange,
				content.contentContainerY.outputRange
        )
	const bgOpacity = useTransform(
		springScrollYProgress,
		[0, 0.1, 0.13],
		[0, 0, 1]
    );


	const howToPlayMotionContainerStyle = {
        opacity: isWindowLg ? contentContainerOpacity : blockerOpacity,
        position: isWindowLg
        ? holdAtPosition(springScrollYProgress, 0.25, 0.75)
        : "relative",
    }

    if (isWindowLg()) {
		howToPlayMotionContainerStyle.y = contentContainerY;
	}

	useEffect(() => {
		if (isWindowLg()) {
			loadPCAnimation();
		} else {
			loadMobileAnimation();
		}
	}, []);

	function loadMobileAnimation() {
		setAnimationData(null);
		content.mobileAnimationData().then((module) => {
			setAnimationData(module.default);
		});
	}

	function loadPCAnimation() {
		setAnimationData(null);
		content.pcAnimationData().then((module) => {
			setAnimationData(module.default);
		});
	}

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const lottie = lottieRef.current;

		if (targetRef.current) {
			const { offsetTop, scrollHeight } = targetRef.current;

			const targetScroll = 0.6 * scrollHeight;
			const endingFrame = content.TOTAL_FRAMES;

			const frame =
				((scrollPosition - offsetTop) / targetScroll) *
				content.TOTAL_FRAMES;

			if (lottie) {
				lottie.goToAndStop(frame, true);
				if ((scrollPosition - offsetTop) / scrollHeight > 0.6) {
					lottie.goToAndStop(endingFrame, true);
				}
			}
		}
	}, [scrollPosition]);

	return (
		<motion.section
			className="bg-black h-[250vh] lg:h-[200vh] grid grid-rows-5 grid-cols-12 relative z-0 lg:grid-rows-[repeat(12,minmax(0,1fr))] lg:grid-cols-8 overflow-x-hidden mt-[-1px]"
			ref={targetRef}
			style={{ opacity: bgOpacity }}
		>
			<motion.h2
				className={`text-2xl text-sc-off-white font-Cinzel mx-auto col-span-12 col-start-1 row-span-full row-start-1 sticky top-[45%] self-start text-center  w-full`}
				style={{
					opacity: sectionTitleOpacity,
					position: holdAtPosition(springScrollYProgress, 0.0, 0.5),
				}}
			>
				{content.sectionSubtitle}
			</motion.h2>
			<motion.div
				className=" grid self-start w-full h-screen grid-cols-2 col-span-12 col-start-1 grid-rows-3 row-start-1 row-span-1 lg:h-screen lg:row-start-1 lg:grid-rows-5 lg:grid-cols-2 sm:row-span-1 lg:row-span-3 lg:col-start-1 lg:col-span-8 sm:row-start-1 top-24 lg:top-24  z-[2]"
				style={{
					opacity: animationOpacity,
					position: holdAtPosition(springScrollYProgress, 0.0, 0.85),
				}}
			>
				{/* Animation here */}
				<Lottie
					animationData={animationData}
					lottieRef={lottieRef}
					className="sticky top-0 col-span-2 col-start-1 row-span-2 row-start-1 lg:row-start-1 lg:col-start-1 lg:col-span-12 lg:row-span-6 "
				/>
			</motion.div>

			<HowToPlayMotionContainer
				align={content.align ? content.align : "left"}
				style={howToPlayMotionContainerStyle}
			>
				<div className="flex col-span-3 col-start-1 row-start-1 md:col-span-4 h-fit z-[2]">
					<HowToPlaySectionHeading
						title={content.sectionTitle}
						style={{
							opacity: headingOpacity,
						}}
					/>
				</div>
				<div className="flex items-start col-start-4 lg:col-start-1 row-span-1 row-start-1 col-span-full  md:col-start-5 sm:mx-6 md:mx-16 lg:mx-0 z-[2]">
					<HowToPlaySectionSubheading
						subheading={content.sectionText}
						style={{ opacity: subheadingOpacity }}
					/>
				</div>
			</HowToPlayMotionContainer>
		</motion.section>
	);
};

export default HowToPlayContentBlock;
