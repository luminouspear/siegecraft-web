import React, { useState, useEffect, useRef } from "react";
import { elementPageInfo } from "../../constants";
import { useCycleIndex } from "../global/utils/useCycleIndex";
import { ElementHeroBackgroundComponent } from "./ElementHeroBackgroundComponent";
import { ElementDetailContentComponent } from "./ElementDetailContentComponent";

export function ElementsContent(props) {
	const {
		featuredCardImages,
		currentGlobalElementInView,
		setCurrentElementInView,
		isScrolled,
	} = props;
	const cardRef = useRef();

	return (
		<div className="inline-block w-full min-h-screen">
			<div className=" bg-sc-off-white font-Catamaran  min-h-fit">
				{elementPageInfo.map((element) => (
					<div key={element.id} className="h-full flex flex-col ">
						<ElementHeroBackgroundComponent
							element={element}
							setCurrentElementInView={setCurrentElementInView}
						/>
						<ElementDetailContentComponent
							element={element}
							cardRef={cardRef}
							currentGlobalElementInView={
								currentGlobalElementInView
							}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
