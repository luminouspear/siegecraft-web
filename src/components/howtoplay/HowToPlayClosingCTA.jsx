import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const HowToPlayClosingCTA = (props) => {
	const { content, elements } = props;
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});

	const gridPositions = [
		" row-start-1 col-start-2 row-span-1 col-span-1 ",
		" row-start-1 col-start-4 row-span-1 col-span-1 ",
		" row-start-5 col-start-2 row-span-1 col-span-1 ",
		" row-start-5 col-start-4 row-span-1 col-span-1 ",
		" row-start-3 col-start-1 row-span-1 col-span-1 ",
		" row-start-3 col-start-5 row-span-1 col-span-1 ",
	];

	const getElementOpacity = (delay) => {
		const elementOpacity = useTransform(
			scrollYProgress,
			[0, 0.2 + (delay * 5), 0.3 + (delay * 5)],
			[0, 0,1 ]
		);
        console.log(0.3+ (delay*7))
		return elementOpacity;
	};

	return (
		<section
			className="relative h-[300vh] bg-sc-dark-black grid grid-rows-3 grid-cols-1"
			ref={targetRef}
		>
			<div className="sticky grid grid-cols-5 col-span-1 col-start-1 grid-rows-5 row-span-1 row-start-1 pt-24 mx-auto pb-36 top-32 lg:top-24 lg:w-3/4 xl:w-1/2">
				<h2
					className={`col-start-2 col-span-3 row-start-3 row-span-1 text-xl font-Cinzel font-bold text-center text-sc-off-white px-4`}
				>
					{content.sectionTitle}
					<br />
					<br className={``} />
					<span className="text-lg font-bold font-Catamaran">
						{content.sectionText}
					</span>
				</h2>

				{elements.map((element, index) => {
					return (
						<motion.div
							key={element.id}
							className={`flex flex-col font-Cinzel text-sm md:text-xl text-sc-off-white text-center ${gridPositions[index]}`}
							style={{
								opacity: getElementOpacity(element.id / 100),
							}}
						>
							<Link
								to={`/elements${element.elementLink}`}
								className={`flex flex-col items-center justify-center group `}
							>
								<element.elementIcon
									className={`w-10 h-10 mb-2 group-hover:${element.elementTextColor}`}
								/>
								{element.elementName}
							</Link>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default HowToPlayClosingCTA;
