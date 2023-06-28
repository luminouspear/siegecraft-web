import React from "react";
import { elementPageInfo } from "../../constants";
import { ElementHeroBackgroundComponent } from "./ElementHeroBackgroundComponent";
import { ElementDetailContentComponent } from "./ElementDetailContentComponent";

export function ElementsContent(props) {
	const {
		featuredCardImages,
		currentGlobalElementInView,
		setCurrentElementInView,
	} = props;

	return (
		<div className="inline-block w-full min-h-screen">
			<div className=" bg-sc-off-white font-Catamaran  min-h-fit">
				{elementPageInfo.map((element) => (
					<div key={element.id} className="h-full flex flex-col ">
						<ElementHeroBackgroundComponent
							element={element}
							currentGlobalElementInView={
								currentGlobalElementInView
							}
							setCurrentElementInView={setCurrentElementInView}
						/>
						<ElementDetailContentComponent
							element={element}
							currentGlobalElementInView={
								currentGlobalElementInView
							}
							setCurrentElementInView={setCurrentElementInView}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
