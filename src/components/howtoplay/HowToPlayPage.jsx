import React, { useEffect } from "react";
import { howToPlayContent, sectionElements } from "../../constants";
import HowToPlayHero from "./HowToPlayHero";
import HowToPlayDecks from "./HowToPlayDecks";
import HowToPlayPlaymatLottie from "./HowToPlayPlaymatLottie";
import HowToPlayTerritoriesLottie from "./HowToPlayTerritoriesLottie";
import HowToPlayTerritoriesMoreLottie from "./HowToPlayTerritoriesMoreLottie";
import HowToPlayUnits from "./HowToPlayUnits";
import HowToPlayAttack from "./HowToPlayAttack";
import HowToPlayConquer from "./HowToPlayConquer";
import HowToPlayClosingCTA from "./HowToPlayClosingCTA";
import ContactSection from "../global/ContactSection";
import FooterSection from "../global/FooterSection";

const HowToPlayPage = () => {


	useEffect(() => {

		window.scrollTo(0, 0);

	}, []);

	return (
		<div className="bg-black">
			<HowToPlayHero
				content={howToPlayContent[0]}
				elements={sectionElements}
			/>
			<HowToPlayDecks content={howToPlayContent[1]} />
			<HowToPlayPlaymatLottie content={howToPlayContent[2]} />
			<HowToPlayTerritoriesLottie content={howToPlayContent[3]} />
			<HowToPlayTerritoriesMoreLottie content={howToPlayContent[4]} />
			<HowToPlayUnits content={howToPlayContent[5]} />
			<HowToPlayAttack content={howToPlayContent[6]} />
			<HowToPlayConquer content={howToPlayContent[7]} />
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
