import React from "react";

export function showCardModal(
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
) {
	return (
		<div
			className=" z-100 absolute sticky h-[100vh] w-full inset-0 transform bg-black/95 flex items-center justify-center overflow-hidden"
			ref={modalRef}
		>
			<div className="p-8 overflow-hidden">
				<button
					className="absolute top-0 right-0 m-4 text-white h-16 w-16 text-4xl hover:text-yellow-300"
					onClick={closeModal}
				>
					{closeModalButton}
				</button>
				<div className="grid grid-flow-col grid-cols-12 items-center justify-center">
					<button
						className="text-white text-4xl col-span-1 md:col-span-1"
						onClick={handleBackButtonClick}
						disabled={selectedCardIndex === 0}
					>
						{backButton}
					</button>

					<div
						className={`${
							selectedCard.type === "Territory"
								? "rotate-90 transform transition-transform duration-300 ease-out col-span-6"
								: "rotate-0 "
						} w-fit relative col-span-10`}
					>
						<img
							className={`${
								selectedCard.type === "Territory"
									? ""
									: "rotate-0"
							} rounded-2xl cursor-pointer w-full`}
							src={`/${selectedCard.imageUrl}`}
							alt={selectedCard.imageAltText}
							onError={(e) => {
								setShowDefaultText(true);
								e.target.src =
									"/assets/images/prime/card_images/card_back.jpg";
							}}
							onClick={closeModal}
						/>
						<div
							className={`${
								showDefaultText ? "" : "hidden"
							} absolute inset-0 bg-white m-12 rounded-xl opacity-95 pt-[50%] px-8`}
						>
							<div className="text-black">
								{/* Card Name (Card Cost / Card Affiliation) */}
								<span className="font-bold text-center">
									{selectedCard.cardName}
								</span>{" "}
								(
								<span className="px-2 py-1 font-serif text-sm text-white bg-black rounded-full">
									{selectedCard.manaCost
										? selectedCard.manaCost
										: selectedCard.manaProduced
										? selectedCard.manaProduced
										: ""}
								</span>{" "}
								/{" "}
								{selectedCard.cardElement !== "Neutral" ||
								selectedCard.type !== "Territory"
									? getCardElementalAffiliationString(
											selectedCard.cardElementalAffiliation,
											selectedCard.elementID
									  )
									: ""}
								)
							</div>
							{/* Card Supertype, Type and Subtype
Ex: Legendary Water Unit - Dragon */}
							<div className="pb-4 text-sm font-medium">
								{selectedCard.superType}{" "}
								{selectedCard.cardElement} {selectedCard.type} -{" "}
								{selectedCard.subType}
							</div>
							<div className="text-sm font-normal">
								{processCardText(selectedCard.cardText)}
							</div>
							<div className="text-sm font-normal">
								{selectedCard.cardFlavorText}
							</div>
							<div className="pb-6 text-sm font-medium">
								{selectedCard.type === "Unit"
									? `Strength: ${selectedCard.strength} / Defense: ${selectedCard.defense}`
									: selectedCard.type === "Territory"
									? `Defense: ${selectedCard.territoryDefense}`
									: ""}
							</div>
							<div className="font-normal text-[10px]">
								{selectedCard.copyrightText}
							</div>
						</div>
					</div>
					<button
						className="text-white text-4xl col-span-1 md:col-span-1"
						onClick={handleForwardButtonClick}
						disabled={selectedCardIndex === cards.length - 1}
					>
						{forwardButton}
					</button>
				</div>
			</div>
		</div>
	);
}
