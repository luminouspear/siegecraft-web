import React, { useState,useEffect } from "react";

export const CardFilter = ({
	cards,
	filteredCards,
	onFilterChange,
	onToggleShowDetails,
	showTextDetails,
	elementFilters,
	handleElementFiltersChange,
}) => {
	// initialize search term to blank
	const [searchTerm, setSearchTerm] = useState("");
	//initialize the element filters to true


	// useEffect(() => {
	// 	onFilterChange({ searchTerm, elementFilters })
	// }, [elementFilters, onFilterChange, searchTerm]);
	const handleSearchTermChange = (event) => {
		setSearchTerm(event.target.value);
	};



	useEffect(() => {
	  console.log("elementFitlers: ", elementFilters)


	}, [elementFilters])


	const handleFilterSubmit = (event) => {
		event.preventDefault();
		console.log("filter submitted");
		console.log(
			"searchTerm:",
			searchTerm,
			"elementFilters:",
			elementFilters
		);
		onFilterChange({ searchTerm, elementFilters });
	};

	return (
		<div className="flex flex-col items-center align-middle justify-center container mx-auto">
			<form onSubmit={handleFilterSubmit}>
				<div className="w-full flex flex-col md:flex-row align-middle items-center ">
					<input
						type="text"
						value={searchTerm}
						onChange={handleSearchTermChange}
						placeholder="Find a card by name, description, etc..."
						className="md:my-4 md:mr-0 my-2 border-gray-300 px-2 py-2 w-8/12 md:w-8/12 focus:border-gray-600 border-2 h-12 rounded "
					/>
					<button
						type="submit"
						className=" bg-red-500 w-8/12 md:w-4/12 h-12 px-4 rounded text-white font-bold text-xl mb-4 md:mt-4"
					>
						Search
					</button>
				</div>
				<div className="flex flex-row items-center w-full ">
					<label className="font-Catamaran text-medium hover:text-sc-dark-blue ">
						<input
							type="checkbox"
							checked={showTextDetails}
							onChange={onToggleShowDetails}
							className="h-5 w-5 mr-2"
						/>
						Show card text details
					</label>
				</div>

				<div className="flex flex-row w-full justify-evenly mb-2 mt-4 font-Catamaran ">
					{Object.keys(elementFilters).map(
						(element) =>
							element && (
								<div
									key={element}
									className="flex flex-row align-middle items-center "
								>
									<input
										type="checkbox"
										name={element}
										checked={elementFilters[element]}
										onChange={handleElementFiltersChange}
										className="h-4 w-4 px-2"
									/>
									<span className="font-medium pl-1 pr-4 text-sc-dark-black">
										{element}
									</span>
								</div>
							)
					)}
				</div>
			</form>
			<div className="flex  w-8/12 justify-end">
				<h3 className="font-Catamaran font-bold">
					{filteredCards.length} card
					{filteredCards.length === 1 ? "" : "s"}
				</h3>
			</div>
		</div>
	);
};
