import React from "react";
import HeroSection from "./homepage/HeroSection";
import MainPoints from "./homepage/MainPoints";
import ElementsCarousel from "./homepage/ElementsCarousel";
import VideoSection from "./homepage/VideoSection";
import StoreCTASection from "./homepage/StoreCTASection";
import GallerySection from "./homepage/GallerySection";
import ContactSection from "./global/ContactSection";
import FooterSection from "./global/FooterSection";

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
