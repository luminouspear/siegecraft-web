import React from "react";
import CardModal from "./CardModal";
import CardList from "./CardList"
import SectionWrapper from "../hoc/SectionWrapper";
import FooterSection from "../global/FooterSection";

const CardsPage = () => {
	return (
		<>
            <CardList />
            <FooterSection />
		</>
	);
};

export default SectionWrapper(CardsPage, "cards", "bg-sc-off-white");
