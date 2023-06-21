import React, { createContext, useState, useEffect } from "react";

export const CardContext = createContext();

export const CardProvider = (props) => {
	const [cards, setCards] = useState([]);

	const API_URL = "http://localhost:5006/";

	const getCardById = async (cardId) => {

		try {
			const res = await fetch(`${API_URL}api/cards/${cardId}`);
			if (!res.ok) {
				throw new Error(`HTTP Error. Status: ${res.status}`)
			} else {
				const card = await res.json();
				return card
			}
		} catch (err) {
			console.log(err)
			return null;
		};
	}

	useEffect(() => {
		fetch(`${API_URL}api/cards/`)
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setCards(data);
			})
			.catch((err) => {
				console.log("Fetch error: ", err);
			});
	}, []);

	return (
		<CardContext.Provider value={{ cards, setCards, getCardById }}>
			{props.children}
		</CardContext.Provider>
	);
};
