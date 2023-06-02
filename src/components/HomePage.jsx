import React from "react";
import HeroSection from "./HomePage/HeroSection";
import MainPoints from "./HomePage/MainPoints";
import ElementsCarousel from "./HomePage/ElementsCarousel";
import VideoSection from "./HomePage/VideoSection";
import StoreCTASection from "./HomePage/StoreCTASection";
import GallerySection from "./HomePage/GallerySection";
import ContactSection from "./HomePage/ContactSection";

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
		</>
	);
};

export default HomePage;
