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

	const opacity = useTransform(
		scrollYProgress,
		[0.1, 0.15, 0.22],
		[0, 0.2, 1]
	);
	const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);
	const holdAtPosition22 = useTransform(scrollYProgress, (pos) => {
		console.log(pos);
		return pos < 1 && pos >= 0.22 ? "fixed" : "relative";
	});
	const releaseFixedBackgroundPosition = useTransform(
		scrollYProgress,
		(pos) => {
			return pos === 1 ? "relative" : "fixed";
		}
	);
	const top = useTransform(scrollYProgress, (pos) => {
		return pos >= 0.22 ? paddingTop : "auto";
	});
	const [pEndY, setPEndY] = useState("3rem");
	const pStartY = "100vh";
	const pTranslateY = useTransform(
		scrollYProgress,
		[0.22, 0.45],
		[pStartY, pEndY],
		"clamp"
	);

	useEffect(() => {
		const handleResizeImage = (entries) => {
			for (let entry of entries) {
				const imageHeight = entry.target.offsetHeight;
			}
		};
	}, [scrollYProgress.current]);

	return (
		<section className={`relative h-[300vh] `} ref={targetRef}>
			<div
				className="w-full h-full bg-black fixed inset-0 z-[-3]"
				style={{ position: releaseFixedBackgroundPosition }}
			>
				&nbsp;
			</div>
			<motion.div
				className="h-screen w-screen relative z-[-2] "
				style={{ opacity, position: holdAtPosition22, top }}
				ref={imageRef}
			>
				<img
					className="bg-cover object-cover bg-repeat w-screen h-screen bg-[center_center]"
					src={content.bgImage}
					loading="lazy"
				/>
			</motion.div>

			<div className="w-full h-screen pt-[100vh] p-16 z-[10]">
				<div className="w-1/2 bg-white">{content.sectionTitle}</div>
			</div>
		</section>
	);
};

export default HowToPlayDecks;
