import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/global/NavBar";
import HomePage from "./components/homepage/HomePage";
import CardsPage from "./components/cards/CardsPage";
import ElementsPage from "./components/elements/ElementsPage";
import HowToPlayPage from "./components/howtoplay/HowToPlayPage";
import { showTailwindDebug } from "./showTailwindDebug";
import { CardProvider } from "./context/CardContext";
import NotFoundPage from "./components/global/NotFoundPage";

function App() {
	const debugWindowSize = false;

	return (
		<>
			<CardProvider>
				<BrowserRouter>
					<NavBar />
					{debugWindowSize && showTailwindDebug(debugWindowSize)}
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/cards" element={<CardsPage />} />
						<Route path="/elements" element={<ElementsPage />} />
						<Route
							path="/howtoplay"
							element={<HowToPlayPage />}
						/>
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</BrowserRouter>
			</CardProvider>
		</>
	);
}

export default App;
