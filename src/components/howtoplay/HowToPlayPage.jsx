import React from "react";
import { howToPlayContent, sectionElements } from "../../constants";
import HowToPlayHero from "./HowToPlayHero";
import HowToPlayDecks from "./HowToPlayDecks";
import HowToPlayPlaymatLottie from "./HowToPlayPlaymatLottie";
import HowToPlayTerritoriesLottie from "./HowToPlayTerritoriesLottie";
import HowToPlayTerritoriesMoreLottie from "./HowToPlayTerritoriesMoreLottie";
import HowToPlayUnits from "./HowToPlayUnits";
import HowToPlayAttack from "./HowToPlayAttack";
import HowToPlayConquer from "./HowToPlayConquer";

const HowToPlayPage = () => {
	return (
		<>
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
		</>
	);
};

export default HowToPlayPage;
