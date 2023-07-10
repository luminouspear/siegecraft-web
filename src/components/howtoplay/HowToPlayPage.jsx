import React, { useEffect, lazy, Suspense } from "react";
import { howToPlayContent, sectionElements } from "../../constants";
import HowToPlayHero from "./HowToPlayHero";
import HowToPlayDecks from "./HowToPlayDecks";
const HowToPlayPlaymat = lazy(() => import("./HowToPlayPlaymat"));
const HowToPlayTerritories = lazy(() => import("./HowToPlayTerritories"));
const HowToPlayTerritoriesMore = lazy(() =>
	import("./HowToPlayTerritoriesMore")
);
const HowToPlayUnits = lazy(() => import("./HowToPlayUnits"));
const HowToPlayAttack = lazy(() => import("./HowToPlayAttack"));
const HowToPlayConquer = lazy(() => import("./HowToPlayConquer"));
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
			<Suspense fallback={<div>Loading</div>}>
				<HowToPlayPlaymat content={howToPlayContent[2]} />
			</Suspense>
			<Suspense fallback={<div>Loading</div>}>
				<HowToPlayTerritories content={howToPlayContent[3]} />
			</Suspense>
			 <Suspense fallback={<div>Loading</div>}>
				<HowToPlayTerritoriesMore content={howToPlayContent[4]} />
			</Suspense>
			<Suspense fallback={<div>Loading</div>}>
				<HowToPlayUnits content={howToPlayContent[5]} />
			</Suspense>
			<Suspense fallback={<div>Loading</div>}>
				<HowToPlayAttack content={howToPlayContent[6]} />
			</Suspense>
			<Suspense fallback={<div>Loading</div>}>
				<HowToPlayConquer content={howToPlayContent[7]} />
			</Suspense>
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
