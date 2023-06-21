import React from "react";
import { bg_texture_light } from "../../assets";
import { elementPageInfo } from "../../constants";
import { Reveal } from "../utils/Reveal";

export function ElementsContent(featuredCardImages) {
	return (
		<div className="inline-block w-full min-h-screen">
			<div className=" bg-sc-off-white font-Catamaran  min-h-fit">
				{elementPageInfo.map((element) => (
					<div
						key={element.id}
						id={element.sectionElement}
						className="h-full flex flex-col "
					>
						<div
							className="h-screen bg-fixed bg-no-repeat bg-cover bg-[center_center] w-full col-start-1 col-span-8  grid grid-flow-col grid-cols-8 grid-rows-3"
							style={{
								backgroundImage: `url(${element.sectionBg})`,
							}}
						>
							<Reveal
								className={`row-start-2 col-span-2 ${
									element.id % 2 === 0
										? "col-start-2"
										: "col-start-6"
								} bg-sc-off-white p-8 shadow-2xl rounded h-fit`}
							>
									<h2 className="text-3xl font-Cinzel font-bold mb-4">
										{element.sectionTitle}
									</h2>
									<p className="font-Catamaran ">
										{element.sectionSubtitle}
									</p>
							</Reveal>
						</div>
						<div
							className="mx-auto inline-flex bg-cover bg-[center_center] bg-no-repeat w-full shadow-inner justify-center"
							style={{
								backgroundImage: `url(${bg_texture_light})`,
							}}
						>
							<div
								className={`w-full container my-12 grid grid-flow-col px-16 grid-cols-2 justify-center items-center align-middle   ${
									element.id % 2 === 0 ? "order-1" : "order-2"
								}`}
							>
								<Reveal
									className={`${
										element.id % 2 === 0
											? "order-1"
											: "order-2"
									}`}
								>
									<h2 className="text-2xl font-Cinzel font-bold mb-4">
										{element.featuredSectionHeader}
									</h2>
									<p
										className=""
										dangerouslySetInnerHTML={{
											__html: element.featuredSectionText,
										}}
									/>
								</Reveal>
								<Reveal
									className={` mx-auto
                                                        ${
															element.id % 2 === 0
																? "order-2"
																: "order-1"
														}`}
								>
									<img
										className="h-[32rem] rounded-lg shadow-xl"
										src={
											featuredCardImages[
												element.featuredCardId
											]
										}
									/>
								</Reveal>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
