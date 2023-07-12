import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { IconCaret } from "../../assets";

const HowToPlayHero = (props) => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["end end", "end start"],
	});
	const { content, elements } = props;

	const opacity = useTransform(scrollYProgress, [0, 0.33], [1, 0]);
	const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);
	const position = useTransform(scrollYProgress, (pos) => {
		return pos === 1 ? "relative" : "fixed";
	});
	const shrinkOnLateScroll = useTransform(
		scrollYProgress,
		[0.2, 0.57],
		[1, 0]
	);
	const fadeOutOnLateScroll = useTransform(
		scrollYProgress,
		[0.5, 0.7],
		[1, 0]
	);
	const caretScale = useTransform(scrollYProgress, [0.24, 0.61], [1, 0]);
	const caretFade = useTransform(scrollYProgress, [0.55, 0.75], [.8, 0]);

	const scaleUpOntoScreen = (delay) => {
		return useTransform(
			scrollYProgress,
			[
				0 + delay / 10,
				0.005 + delay / 10,
				0.007 + delay / 10,
				0.008 + delay / 10,
			],
			[0.33, 1.0, 1.1, 1.0]
		);
	};
	const scalesWithDelay = elements.map((element) =>
		scaleUpOntoScreen(element.id)
	);

	return (
		<section
			className="relative h-[90vh] lg:h-screen  lg:pt-[10%] text-sc-off-white  bg-sc-dark-black"
			ref={targetRef}
		>
			<div className="relative grid items-center justify-center w-full h-full grid-flow-row grid-cols-12 ">
				<motion.h1
					className="w-full col-span-10 col-start-2 row-span-1 row-start-2 pt-0 pb-16 text-3xl text-center font-Cinzel sm:pt-0"
					style={{ opacity, scale }}
				>
					{content.sectionTitle}
				</motion.h1>
				<motion.h2
					style={{ opacity, scale }}
					className="w-full col-span-10 col-start-2 row-start-2 mx-auto mt-48 text-xl text-center font-Catamaran md:w-3/4 lg:w-1/2 xl:w-5/12 2xl:w-1/3"
					dangerouslySetInnerHTML={{ __html: content.sectionText }}
				/>

				<motion.ul
					className="grid grid-flow-col grid-cols-6 col-span-12 col-start-1 row-span-1 row-start-3 gap-2 px-4 mx-auto md:w-3/4 lg:w-1/2 xl:w-5/12 2xl:w-1/2"
					style={{
						scale: shrinkOnLateScroll,
						opacity: fadeOutOnLateScroll,
					}}
				>
					{elements.map((element, index) => {
						const ElementIcon = element.elementIcon;
						const startCol = "col-start-" + element.id;
						return (
							<li
								key={element.id}
								className={`flex flex-col items-center col-span-1 row-start-1 ${startCol} text-center`}
							>
								<Link
									to={`/elements${element.elementLink}`}
									className="text-sm text-center font-Cinzel md:text-xl"
								>
									<ElementIcon
										className="w-10 h-10 mb-2 md:w-16 md:h-16 md:p-2"
										style={{
											scale: scalesWithDelay[index],
										}}
									/>
									{element.elementName}
								</Link>
							</li>
						);
					})}
				</motion.ul>
				<motion.div
					className="flex items-center justify-center w-full col-span-12 row-start-4 opacity-80"
					style={{ opacity: caretFade, scale: caretScale }}
				>
					<IconCaret className={"rotate-90 w-6 "} />
				</motion.div>
			</div>
		</section>
	);
};

export default HowToPlayHero;

// <section
// 	className="relative h-screen  lg:pt-[10%] text-sc-off-white  bg-sc-dark-black"
// 	ref={targetRef}
// >
// 	<div className="relative flex flex-col items-center justify-center w-full testborder">
// 		<motion.h1
// 			className="pt-0 text-3xl font-Cinzel sm:pt-0"
// 			style={{ opacity, scale, position }}
// 		>
// 			{content.sectionTitle}
// 		</motion.h1>
// 		<motion.h2
// 			style={{ opacity, scale, position }}
// 			className="pt-[12rem] px-6 text-xl font-Catamaran text-center md:w-3/4 lg:w-1/2 xl:w-5/12 2xl:w-1/3"
// 			dangerouslySetInnerHTML={{ __html: content.sectionText }}
// 		/>

// 		<motion.ul
// 			className="grid grid-flow-col grid-cols-6 px-4 gap-2 md:w-3/4 lg:w-1/2 xl:w-5/12 2xl:w-1/3 fixed pt-[36rem]"
// 			style={{
// 				scale: shrinkOnLateScroll,
// 				opacity: fadeOutOnLateScroll,
// 				position,
// 			}}
// 		>
// 			{elements.map((element, index) => {
// 				const ElementIcon = element.elementIcon;
// 				const startCol = "col-start-" + element.id;
// 				return (
// 					<li
// 						key={element.id}
// 						className={`flex flex-col items-center col-span-1 row-start-1 ${startCol} text-center`}
// 					>
// 						<Link
// 							to={`/elements${element.elementLink}`}
// 							className="text-sm text-center font-Cinzel md:text-xl"
// 						>
// 							<ElementIcon
// 								className="w-10 h-10 mb-2 md:w-16 md:h-16 md:p-2"
// 								style={{
// 									scale: scalesWithDelay[index],
// 								}}
// 							/>
// 							{element.elementName}
// 						</Link>
// 					</li>
// 				);
// 			})}
// 		</motion.ul>
// 		<div>
// 			<IconCaret className={"rotate-90 w-6 mt-[48rem]"} />
// 		</div>
// 	</div>
// </section>;
