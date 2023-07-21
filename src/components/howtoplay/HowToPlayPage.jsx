import React, { useState, useEffect, lazy, Suspense } from "react";
import { howToPlayContent, sectionElements } from "../../constants";
import HowToPlayHero from "./HowToPlayHero";
import HowToPlayDecks from "./HowToPlayDecks";
const HowToPlayContentBlock = lazy(() => import("./HowToPlayContentBlock"));
import HowToPlayClosingCTA from "./HowToPlayClosingCTA";
import ContactSection from "../global/ContactSection";
import FooterSection from "../global/FooterSection";

const HowToPlayPage = () => {

	const [windowSize, setWindowSize] = useState(false)

	useEffect(() => {
		window.scrollTo(0, 0);
		isWindowLg()
		console.log(windowSize)
	}, []);
	useEffect(() => {
		console.log(windowSize)
	}, [windowSize]);

	const lottieContent = howToPlayContent.filter(
		(item) => item.id > 1 && item.id < 8
	);
	const isWindowLg = () => {
		setWindowSize(window.innerWidth >= 1024);
	};


		useEffect(() => {


			// Attach the event listener
			window.addEventListener("resize", isWindowLg);

			// Clean up the event listener on unmount
			return () => window.removeEventListener("resize", isWindowLg);
		}, []);

	return (
		<div className="bg-black">
			<HowToPlayHero
				content={howToPlayContent[0]}
				elements={sectionElements}
			/>
			<HowToPlayDecks windowSize={windowSize} content={howToPlayContent[1]} />
			{lottieContent.map((content) => {
				return (
				<Suspense fallback={<div>Loading...</div>} key={content.id}>
						<HowToPlayContentBlock windowSize={windowSize}  content={content} />
				</Suspense>
				)
			}
			)}
			<HowToPlayClosingCTA
				content={howToPlayContent[8]}
				elements={sectionElements}
			/>
			<ContactSection />
			<FooterSection />
		</div>
	);
};

export default HowToPlayPage;
