import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import { showTailwindDebug } from "./showTailwindDebug";

function App() {
	const debugWindowSize = true;


	return (
		<>
			<BrowserRouter>
				{debugWindowSize && showTailwindDebug(debugWindowSize)}
				<NavBar />
				<Routes>
					<Route path="*" element={<HomePage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
