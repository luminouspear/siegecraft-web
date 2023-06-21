import React, { useState, useEffect } from "react";
import {
	iconEarthWhite,
	iconAirWhite,
	iconFireWhite,
	iconLightWhite,
	iconShadowWhite,
	iconWaterWhite,
} from "../../assets";
import { elementPageSectionContent, elementPageInfo } from "../../constants";
import { useContext } from "react";
import { CardContext } from "../../context/CardContext";
import ContactSection from "../global/ContactSection";
import FooterSection from "../global/FooterSection";
import { ElementsContent } from "./ElementsContent";

const ElementsPage = () => {
	const { cards, getCardById } = useContext(CardContext);
	const [featuredCardImages, setFeaturedCardImages] = useState({});

	useEffect(() => {
		const fetchFeaturedCards = async () => {
			const newFeaturedCardImages = {};
			for (const element of elementPageInfo) {
				const card = await getCardById(element.featuredCardId);

				if (card && card.imageUrl) {
					newFeaturedCardImages[element.featuredCardId] =
						card.imageUrl;
				}
			}
			setFeaturedCardImages(newFeaturedCardImages);
		};
		fetchFeaturedCards();
	}, [elementPageInfo, getCardById]);


	useEffect(() => {
		const hash = window.location.hash;
		if (hash) {
			const element = document.getElementById(hash.replace("#", ""));
			if (element) element.scrollIntoView();
		}
	}, []);

	return (
		<>
			<div className="inline-block w-full h-auto">
                <div className="mx-auto pt-12 pb-4 bg-sc-dark-black flex justify-center flex-col align-middle items-center ">
                    <h1
                        className="text-center text-4xl font-Cinzel text-sc-off-white"
                        dangerouslySetInnerHTML={{
                            __html: elementPageSectionContent.title,
                        }}
                    />
                    <p
                        className="text-center font-Catamaran text-2xl text-sc-off-white pt-6 w-1/4"
                        dangerouslySetInnerHTML={{
                            __html: elementPageSectionContent.subTitle,
                        }}
                    />
                    <div className=" grid grid-cols-6  pt-8 px-[44rem] w-full h-auto">
                        {elementPageSectionContent.icons.map((element) => {
                            {
                                console.log(element.elementIcon);
                            }
                            return (
                                <div className={` col-start-${
                                            element.id
                                        } col-span-1 flex flex-col items-center`}>
                                    <img
                                        key={element.id}
                                        src={element.elementIcon}
                                        className=" h-12"
                                                />
                                                <h3 className="font-Cinzel text-sc-off-white pt-2">{element.elementName}</h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
			{ElementsContent(featuredCardImages)}
			<ContactSection />
			<FooterSection />
		</>
	);
};

export default ElementsPage;
