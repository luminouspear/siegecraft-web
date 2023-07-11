import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const GalleryCard = (props) => {

    const { direction, className, page, src, srcSet, alt, ANIMATION_TIMING=250 } = props;

	return (
		<AnimatePresence initial={false} custom={direction}>
			<motion.img
				key={page}
				className={className}
				src={src}
				srcSet={srcSet}
				alt={alt}
				loading="lazy"
				drag="x"
				// custom={direction}
				initial={{
					opacity: 1,
					x:
						direction === 1
							? "100%"
							: direction === -1
							? "-100%"
							: "",
					transition: {
						duration: ANIMATION_TIMING / 1000,
						ease: "easeInOut",
					},
				}}
				animate={{
					opacity: 1,
					x: "0",
					transition: {
						duration: ANIMATION_TIMING / 1000,
						ease: "easeInOut",
					},
				}}
				exit={{
					opacity: 0,

					transition: {
						duration: ANIMATION_TIMING / 1000,
						ease: "easeInOut",
					},
				}}
				dragElastic={0.4}
				dragConstraints={{ left: 0, right: 0 }}
				onDragEnd={(event, { offset, velocity }) => {
					if (offset.x > 0 && velocity.x > 500) {
						paginate(-1); // Pagination decrease on drag to the left
					} else if (offset.x < 0 && velocity.x < -500) {
						paginate(1); // Pagination increase on drag to the right
					}
				}}
			/>
		</AnimatePresence>
	);
};

export default GalleryCard;
