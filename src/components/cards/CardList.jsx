import React, { useContext, useState, useEffect, useRef } from "react";
import { CardContext } from "../../context/CardContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// FontAwesome setup stuff from https://fontawesome.com/v5/docs/web/use-with/react
import {
	faArrowLeft,
	faArrowRight,
	faClose,
} from "@fortawesome/free-solid-svg-icons";
import { showCardModal, getAffiliation, processRawText } from "../global/utils";
import { CardFilter } from "./CardFilter";
import LazyLoad from 'react-lazy-load'

export default function CardList() {
	const { cards } = useContext(CardContext);
	// console.log('cards: ', cards);

	//adding a modal window to show a card when clicked on.
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedCardIndex, setSelectedCardIndex] = useState(0);
	const [dimensions, setDimensions] = useState({ top: 0, left: 0 });

	const [filteredCards, setFilteredCards] = useState(cards);
	const [searchTerm, setSearchTerm] = useState("");
	const selectedCard = filteredCards[selectedCardIndex];
	const [showDefaultText, setShowDefaultText] = useState(false);
	const [showTextDetails, setShowTextDetails] = useState(true)
	const [elementFilters, setElementFilters] = useState({
		Earth: true,
		Air: true,
		Fire: true,
		Water: true,
		Light: true,
		Shadow: true,
		Neutral: true,
	});


	// filtering a react list referenced from this video (but highly adapted): https://www.youtube.com/watch?v=weFOaIHlDpo
	// and this https://www.youtube.com/watch?v=xAqCEBFGdYk

	const handleFilterChange = ({ searchTerm, elementFilters }) => {
		console.log("searchTerm: ", searchTerm);
		console.log("elementFilters: ", elementFilters);

		setSearchTerm(searchTerm);
		setElementFilters((prevElementFilters) => {
			return { ...prevElementFilters, ...elementFilters };
		});
	};

	useEffect(() => {
		console.log("After setElementFilters: ", elementFilters);
	}, [elementFilters]);

	useEffect(() => {
		let filtered = cards;

		if (searchTerm) {
			const lsearch = searchTerm.toLowerCase();
			filtered = filtered.filter((card) => {
				return (
					card.cardName.toLowerCase().includes(lsearch) ||
					card.type.toLowerCase().includes(lsearch) ||
					card.subType.toLowerCase().includes(lsearch) ||
					card.superType.toLowerCase().includes(lsearch) ||
					card.cardText.toLowerCase().includes(lsearch)
				);
			});
		}
		setFilteredCards(filtered);
		console.log("after filtering: ", filtered);
	}, [elementFilters, cards, searchTerm]);

	const handleElementFiltersChange = (event) => {
		const { checked, name } = event.target;
		setElementFilters((prevFilters) => ({
			...prevFilters,
			[name]: checked,
		}));
	};


	const backButton = <FontAwesomeIcon icon={faArrowLeft} />;
	const forwardButton = <FontAwesomeIcon icon={faArrowRight} />;
	const closeModalButton = <FontAwesomeIcon icon={faClose} />;

	const handleBackButtonClick = () => {
		setShowDefaultText(false);
		if (selectedCardIndex > 0) {
			setSelectedCardIndex(selectedCardIndex - 1);
		}
	};

	const handleForwardButtonClick = () => {
		setShowDefaultText(false);
		if (selectedCardIndex < cards.length - 1) {
			setSelectedCardIndex(selectedCardIndex + 1);
		}
	};

	const handleShowTextDetails = () => {
		setShowTextDetails(!showTextDetails)
	}

	//Modal window code adapted from https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/

	const openModal = (index) => {
		setSelectedCardIndex(index);
		setShowDefaultText(false);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setSelectedCardIndex(0);
		setIsModalOpen(false);
	};

	//Fixing position for modal window code adapted from https://thewebdev.info/2021/09/05/how-to-get-scroll-position-with-react/
	const modalRef = useRef(null);

	useEffect(() => {
		const { offsetWidth, offsetHeight } = modalRef.current
			? modalRef.current
			: 0;
		if (isModalOpen && modalRef.current) {
			setDimensions({
				top: window.scrollY + (window.innerHeight - offsetHeight) / 2,
				left: (window.innerWidth - offsetWidth) / 2,
			});
		}
	}, [isModalOpen]);

	const getCardElementalAffiliationString = getAffiliation;

	const processCardText = processRawText;

	//Checkbox code adapted from https://stackoverflow.com/questions/55968689/how-can-i-use-checkbox-form-in-react

	return (
		<>
			{!isModalOpen ? (
				<></>
			) : (
				showCardModal(
					modalRef,
					closeModal,
					closeModalButton,
					handleBackButtonClick,
					selectedCardIndex,
					backButton,
					selectedCard,
					setShowDefaultText,
					showDefaultText,
					getCardElementalAffiliationString,
					processCardText,
					handleForwardButtonClick,
					cards,
					forwardButton
				)
			)}
			<div className="flex flex-col items-center justify-center">
				<div className="w-full h-fit mb-12">
					<CardFilter
						cards={cards}
						filteredCards={filteredCards}
						elementFilters={elementFilters}
						onElementsFilterChange={handleElementFiltersChange}
						onFilterChange={handleFilterChange}
						onToggleShowDetails={handleShowTextDetails}
						showTextDetails={showTextDetails}
					/>
				</div>
				<div className="grid grid-cols-1 gap-4 md:gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3">
					{filteredCards.map((card, index) => (
						<div key={index} className="m-8">
							<div className=" pb-4/3 bg-black cursor-pointer rounded-lg shadow-xl">
								<LazyLoad>
									<img
										src={`/${card.imageUrl}`}
										className=" inset-0 w-full h-full object-cover object-center mb-4 rounded-xl"
										alt={card.cardName}
										onClick={() => openModal(index)}
										onError={(e) => {
											setShowDefaultText(true);
											e.target.src =
												"/assets/images/prime/card_images/card_back.jpg";
										}}
									/>
								</LazyLoad>
							</div>
							{showTextDetails ? (
								<div className="w-full  p-4 bg-white/95 rounded">
									<div className="text-black">
										{/* Card Name (Card Cost / Card Affiliation) */}
										<span className="font-bold text-center">
											{card.cardName}
										</span>{" "}
										(
										<span className="px-2 py-1 font-serif text-sm text-white bg-black rounded-full">
											{card.manaCost
												? card.manaCost
												: card.manaProduced
												? card.manaProduced
												: ""}
										</span>{" "}
										/{" "}
										{card.cardElement !== "Neutral" ||
										card.type !== "Territory"
											? getCardElementalAffiliationString(
													card.cardElementalAffiliation,
													card.elementID
											  )
											: ""}
										)
									</div>
									{/* Card Supertype, Type and Subtype
									 Ex: Legendary Water Unit - Dragon */}
									<div className="pb-4 text-sm font-medium">
										{card.superType} {card.cardElement}{" "}
										{card.type} - {card.subType}
									</div>
									<div className="text-sm font-normal">
										{processCardText(card.cardText)}
									</div>
									<div className="text-sm font-normal">
										{card.cardFlavorText}
									</div>
									<div className="pb-6 text-sm font-medium">
										{card.type === "Unit"
											? `Strength: ${card.strength} / Defense: ${card.defense}`
											: card.type === "Territory"
											? `Defense: ${card.territoryDefense}`
											: ""}
									</div>
									<div className="font-normal text-[10px]">
										{card.copyrightText}
									</div>
								</div>
							) : (
								<></>
							)}
						</div>
					))}
				</div>
			</div>
		</>
	);
}
