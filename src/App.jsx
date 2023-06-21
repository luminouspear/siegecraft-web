import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/homepage/HomePage";
import CardsPage from "./components/cards/CardsPage";
import ElementsPage from "./components/elements/ElementsPage";
import { showTailwindDebug } from "./showTailwindDebug";
import { CardProvider } from "./context/CardContext";

function App() {
	const debugWindowSize = true;

	return (
		<>
			<CardProvider>
				<BrowserRouter>
					{debugWindowSize && showTailwindDebug(debugWindowSize)}
					<NavBar />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/cards" element={<CardsPage />} />
						<Route path="/elements" element={<ElementsPage />} />
					</Routes>
				</BrowserRouter>
			</CardProvider>
		</>
	);
}

export default App;
