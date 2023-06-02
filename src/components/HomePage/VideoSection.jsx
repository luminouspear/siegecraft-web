import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { homePageSectionTitles, videoSectionContent } from "../../constants";

const VideoSection = () => {
	return (
		<>
			<div className=" pt-24 w-10/12 md:max-w-2xl md:w-full mx-auto ">
				<h2
					className="text-4xl font-Cinzel font-medium text-center md:w-1/2 mx-auto pb-8 text-sc-off-white"
					dangerouslySetInnerHTML={{
						__html: homePageSectionTitles[2].title,
					}}
				/>
				<p
					className="text-center text-sc-off-white font-Catamaran w-8/12 mx-auto text-2xl"
					dangerouslySetInnerHTML={{
						__html: homePageSectionTitles[2].subTitle,
					}}
				></p>
			</div>
			<div className="w-full lg:w-10/12 mx-auto my-8">
				{videoSectionContent.map((video) => (
					<div key={video.index}
						className={`flex flex-col  lg:space-y-8 space-y-4 px-4 lg:px-8 mb-8 lg:mb-4 ${
							video.index % 2 === 1
								? "lg:flex-row-reverse ml-0"
								: "lg:flex-row lg:space-x-8"
						}`}
					>
						<div
							key={video.index}
							className="lg:w-1/2 lg:flex-1 lg:p-2 w-full lg:mb-12 mb-4"
						>
							<video controls className="rounded-xl">
								{Object.entries(video.videoUrls[0]).map(
									([key, value]) => (
										<source
											key={key}
											src={value[0].url}
											type={value[0].type}
										/>
									)
								)}
								Your browser does not support the video tag.
							</video>
						</div>
						<div
							className={`flex-1 ${
								video.index % 2 === 1 ? "pr-4" : ""
							}`}
						>
							<h3
								className={`text-sc-off-white font-Catamaran font-bold mb-4 text-2xl`}
							>
								{video.title}
							</h3>
							<p
								className={`text-sc-off-white font-Catamaran text-lg`}
							>
								{video.subTitle}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className=" pt-8 w-10/12 md:max-w-2xl md:w-full mx-auto flex flex-col pb-24">
				<h2
					className="text-4xl font-Cinzel font-medium text-center md:w-1/2 mx-auto pb-8 text-sc-off-white"
					dangerouslySetInnerHTML={{
						__html: homePageSectionTitles[2].closingTitle,
					}}
				/>
				<p
					className="text-center text-sc-off-white font-Catamaran w-10/12 mx-auto text-xl"
					dangerouslySetInnerHTML={{
						__html: homePageSectionTitles[2].closingSubTitle,
					}}
				/>
				<a
					href="#"
					className="font-Cinzel text-lg md:text-2xl font-medium hover:text-sc-gold text-sc-off-white px-8 py-4  mt-8 rounded border-2 hover:border-sc-gold border-sc-off-white text-center mx-auto"
				>
					{homePageSectionTitles[2].closingCTA}
				</a>
			</div>
		</>
	);
};

export default SectionWrapper(VideoSection, "videosection", "bg-sc-dark-blue");
