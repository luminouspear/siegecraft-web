import React from "react";
import HeroSection from "./HeroSection";
import MainPoints from "./MainPoints";
import ElementsCarousel from "./ElementsCarousel";
import VideoSection from "./VideoSection";
import StoreCTASection from "./StoreCTASection";
import GallerySection from "./GallerySection";
import ContactSection from "../global/ContactSection";
import FooterSection from "../global/FooterSection";


const HomePage = () => {
	return (
		<>
			<HeroSection />
			<MainPoints />
			<ElementsCarousel />
			<VideoSection />
			<StoreCTASection />
			<GallerySection />
			<ContactSection />
			<FooterSection />
		</>
	);
};

export default HomePage;
