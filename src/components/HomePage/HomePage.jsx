import React, { lazy, Suspense } from "react";
import HeroSection from "./HeroSection";
import MainPoints from "./MainPoints";
import HomePageElementsCarousel from "./HomePageElementsCarousel";
const VideoSection = lazy(() => import("./VideoSection"));

// import VideoSection from "./VideoSection";
import StoreCTASection from "./StoreCTASection";
const GallerySection = lazy(() => import("./GallerySection"));
import ContactSection from "../global/ContactSection";
import FooterSection from "../global/FooterSection";

const HomePage = () => {
	return (
		<>
			<HeroSection />
			<MainPoints />
			<HomePageElementsCarousel />
			<Suspense fallback={<div>Loading...</div>}>
				<VideoSection />
			</Suspense>
			<StoreCTASection />
			<Suspense fallback={<div>Loading</div>}>
				<GallerySection />
			</Suspense>
			<ContactSection />
			<FooterSection />
		</>
	);
};

export default HomePage;
