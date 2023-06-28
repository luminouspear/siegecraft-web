import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

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
    }
    const scalesWithDelay = elements.map((element) => scaleUpOntoScreen(element.id))

	return (
		<section
			className="relative h-screen pt-[25%] lg:pt-[10%] text-sc-off-white  bg-sc-dark-black"
			ref={targetRef}
		>
			<motion.div className="flex w-full justify-center flex-col items-center">
				<motion.h1
					className="font-Cinzel text-3xl pt-36"
					style={{ opacity, scale, position }}
				>
					{content.sectionTitle}
				</motion.h1>
				<motion.h2
					style={{ opacity, scale, position }}
					className="pt-[20rem] px-6 text-xl font-Catamaran text-center md:w-3/4 lg:w-1/2 xl:w-5/12 2xl:w-1/3"
					dangerouslySetInnerHTML={{ __html: content.sectionText }}
				/>

				<motion.ul
					className="grid grid-flow-col grid-cols-6 px-4 gap-2 md:w-3/4 lg:w-1/2 xl:w-5/12 2xl:w-1/3 fixed pt-[48rem]"
					style={{
						scale: shrinkOnLateScroll,
                        opacity: fadeOutOnLateScroll,
                        position
					}}
				>
					{elements.map((element, index) => {
						const ElementIcon = element.elementIcon;
						const startCol = "col-start-" + element.id;
						return (
							<li
								key={element.id}
								className={`flex flex-col items-center col-span-1 row-start-1 ${startCol}`}
							>
								<Link
									to={`/elements${element.elementLink}`}
									className="font-Cinzel text-sm md:text-xl"
								>
								<ElementIcon className="w-10 h-10 md:w-16 md:h-16 mb-2 md:p-2" style={{scale: scalesWithDelay[index]}} />
									{element.elementName}
								</Link>
							</li>
						);
					})}
				</motion.ul>
			</motion.div>
		</section>
	);
};

export default HowToPlayHero;
