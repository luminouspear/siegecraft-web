import React, { useEffect, useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { homePageSectionTitles, videoSectionContent } from "../../constants";
import { Link } from "react-router-dom";

const VideoSection = () => {
	const [videoUrls, setVideoUrls] = useState([]);

	useEffect(() => {
		Promise.all(
			videoSectionContent.map((video) =>
				Promise.all(
					Object.entries(video.videoUrls[0]).map(([key, value]) =>
						value[0].url().then((module) => ({
							...value[0],
							url: module.default,
						}))
					)
				).then((urls) => ({
					...video,
					videoUrls: [
						{
							...video.videoUrls[0],
							...Object.fromEntries(
								urls.map((url, i) => [
									Object.keys(video.videoUrls[0])[i],
									url,
								])
							),
						},
					],
				}))
			)
		).then(setVideoUrls);
	}, []);

	return (
		<>
			<div className="w-10/12 pt-24 mx-auto md:max-w-2xl md:w-full">
				<h2
					className="pb-8 mx-auto text-4xl font-medium text-center font-Cinzel md:w-1/2 text-sc-off-white"
					dangerouslySetInnerHTML={{
						__html: homePageSectionTitles[2].title,
					}}
				/>
				<p
					className="w-8/12 mx-auto text-2xl text-center text-sc-off-white font-Catamaran"
					dangerouslySetInnerHTML={{
						__html: homePageSectionTitles[2].subTitle,
					}}
				></p>
			</div>
			<div className="w-full mx-auto my-8 lg:w-10/12">
				{videoUrls.map((video) => (
					<div
						key={video.index}
						className={`flex flex-col lg:space-y-8 space-y-4 lg:px-8 mb-8 lg:mb-4 ${
							video.index % 2 === 1
								? "lg:flex-row-reverse ml-0"
								: "lg:flex-row lg:space-x-8"
						}`}
					>
						<div
							key={video.index}
							className="w-full mb-4 lg:w-1/2 lg:flex-1 lg:p-2 lg:mb-12"
						>
							<video controls className="lg:rounded-xl">
								{Object.entries(video.videoUrls[0]).map(
									([key, value]) => (
										<source
											key={key}
											src={value.url}
											type={value.type}
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
								className={`text-sc-off-white font-Catamaran font-bold mb-4 mx-auto w-10/12 md:w-8/12 lg:w-10/12 text-2xl`}
							>
								{video.title}
							</h3>
							<p
								className={`text-sc-off-white font-Catamaran mx-auto w-10/12 md:w-8/12 lg:w-10/12 text-lg`}
							>
								{video.subTitle}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="flex flex-col w-10/12 pt-8 pb-24 mx-auto md:max-w-2xl md:w-full">
				<h2
					className="pb-8 mx-auto text-4xl font-medium text-center font-Cinzel md:w-1/2 text-sc-off-white"
					dangerouslySetInnerHTML={{
						__html: homePageSectionTitles[2].closingTitle,
					}}
				/>
				<p
					className="w-10/12 mx-auto text-xl text-center text-sc-off-white font-Catamaran"
					dangerouslySetInnerHTML={{
						__html: homePageSectionTitles[2].closingSubTitle,
					}}
				/>
				<Link
					to="/howtoplay"
					className="px-8 py-4 mx-auto mt-8 text-lg font-medium text-center border-2 rounded font-Cinzel md:text-2xl hover:text-sc-gold text-sc-off-white hover:border-sc-gold border-sc-off-white"
				>
					{homePageSectionTitles[2].closingCTA}
				</Link>
			</div>
		</>
	);
};

export default SectionWrapper(VideoSection, "videosection", "bg-sc-dark-blue");
