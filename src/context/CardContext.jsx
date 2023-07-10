import React, { createContext, useState, useEffect } from "react";

export const CardContext = createContext();

export const CardProvider = (props) => {
	const [cards, setCards] = useState([]);

	const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

	const accessToken = import.meta.env.VITE_REACT_APP_ACCESS_TOKEN;

	const getCardById = async (cardId) => {
		try {
			const res = await fetch(`${API_URL}api/cards/${cardId}`, {
				headers: {
					"X-API-KEY": accessToken,
				},
			});
			if (!res.ok) {
				throw new Error(`HTTP Error. Status: ${res.status}`);
			} else {
				const card = await res.json();
				return card;
			}
		} catch (err) {
			console.log(err);
			return null;
		}
	};

	useEffect(() => {
		if (!cards) {
			fetch(`${API_URL}api/cards/`, {
				headers: {
					"X-API-KEY": accessToken,
				},
			})
				.then((res) => res.json())
				.then((data) => {
					// console.log(data);
					setCards(data);
				})
				.catch((err) => {
					console.log("Fetch error: ", err);
				});
		}
	}, []);

	return (
		<CardContext.Provider value={{ cards, setCards, getCardById }}>
			{props.children}
		</CardContext.Provider>
	);
};
