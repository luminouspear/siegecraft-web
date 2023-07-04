import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import {
	HowToPlaySectionSubheading,
	HowToPlaySectionTitle,
  HowToPlayMotionContainer,
} from "./HowToPlaySectionTitles";

const HowToPlayPlaymat = (props) => {
	const { content } = props;
	const targetRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});

	const panImageX = useTransform(
		scrollYProgress,
		[0.1, 0.25, 0.35],
		[200, -40, 0]
	);
	const moveImageY = useTransform(scrollYProgress,
    [0.28, 0.33, .54,  .65],
    [  50,    0,  0, -425]);

	const scaleImage = useTransform(
		scrollYProgress,
		[0.05, 0.33, 0.5, 0.54, 0.72],
		[1.5, 1.2, 1, 1.1, 2]
	);
	const opacityImage = useTransform(
		scrollYProgress,
		[0.04, 0.33, 0.55, 0.69],
		[0, 1, 1, 0]
	);

  	const contentContainerOpacity = useTransform(
		scrollYProgress,
		[0.27, 0.30, 0.48, 0.53],
		[0, 0.8, 0.8, 0]
	);
	const contentContainerY = useTransform(
		scrollYProgress,
		[0.27, 0.30, 0.31, 0.47, 0.48, 0.53],
		[120, 20, 20, -20, -20, -120]
	);
  	const titleOpacity = useTransform(
		scrollYProgress,
		[0.28, 0.31, 0.50, 0.55],
		[0, 1, 1, 0]
	);
	const contentOpacity = useTransform(
		scrollYProgress,
		[0.30, 0.33, 0.52, 0.57],
		[0, 1, 1, 0]
	);


	const holdAtPosition = (fixedHeight, releaseHeight = 1, loud = false) => {
		const hold = useTransform(scrollYProgress, (pos) => {
			loud && console.log(pos);
			return pos < releaseHeight && pos >= fixedHeight
				? "fixed"
				: "relative";
		});
		return hold;
	};

  	const stickyAtPosition = (fixedHeight, releaseHeight = 1, loud = false) => {
		const hold = useTransform(scrollYProgress, (pos) => {
			loud && console.log(pos);
			return pos < releaseHeight && pos >= fixedHeight
				? "sticky"
				: "relative";
		});
		return hold;
	};

	const sectionTitle = (
		<HowToPlaySectionTitle title={content.sectionTitle} style={{
      opacity: titleOpacity, position: holdAtPosition(0.20, 0.63, false)}} />
  );


	const sectionSubheading = (
		<HowToPlaySectionSubheading
			subheading={content.sectionText}
			style={{
        opacity: contentOpacity,
				position: holdAtPosition(0.35, 0.63, false),
			}}
		/>
	);

	return (
		<section
			ref={targetRef}
			className="w-full lg:h-[240vh] h-[160vh] grid-rows-2 grid lg:grid-rows-4 grid-cols-12 bg-black
      "
		>
			<div className="sticky col-span-12 row-span-1 lg:row-span-2 overflow-hidden top-[33%] sm:top-[25%] lg:top-24 ">
				<motion.img
					src={content.sectionBg}
					srcSet={content.sectionBgSrcSet}
					alt={content.sectionBgAlt}
					loading="lazy"
					className="absolute object-center w-full h-auto "
					style={{
						x: panImageX,
						y: moveImageY,
						scale: scaleImage,
						opacity: opacityImage,

					}}
				/>
      </div>
      <HowToPlayMotionContainer
      style={{opacity: contentContainerOpacity,
      y: contentContainerY }}
      align="right">
        {sectionTitle}
        {sectionSubheading}

      </HowToPlayMotionContainer>

      <div className="flex items-start col-span-4 col-start-1 row-span-1 row-start-2 pl-2 ml-4 md:col-span-5 lg:hidden sm:pl-4">{sectionTitle}</div>
      <div className="sticky flex items-start col-span-8 col-start-5 row-start-2 px-2 md:col-start-6 md:col-span-7 sm:px-8 lg:hidden">{sectionSubheading}</div>
		</section>
	);
};

export default HowToPlayPlaymat;
