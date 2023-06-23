import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const Reveal = ({ children, className, id, width = "fit-content" }) => {

    const animationRef = useRef(null)
    const isInView = useInView(animationRef, { once: true })
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])


	return (
        <div className={className} id={id} ref={animationRef} style={{ position: "relative", width, overflow: "hidden" }}>
			<motion.div
				variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: {opacity:  1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.75, delay: 0.33}}
			>
				{children}
			</motion.div>
		</div>
	);
};