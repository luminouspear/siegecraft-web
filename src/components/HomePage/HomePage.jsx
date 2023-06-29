import React from "react";
import HeroSection from "./HeroSection";
import MainPoints from "./MainPoints";
import HomePageElementsCarousel from "./HomePageElementsCarousel";
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
			<HomePageElementsCarousel />
			<VideoSection />
			<StoreCTASection />
			<GallerySection />
			<ContactSection />
			<FooterSection />
		</>
	);
};

export default HomePage;
