import React from "react";

export function showTailwindDebug(showDebug) {
	if (showDebug) {
		return (
			<div className="fixed top-36 right-0 flex items-center justify-center w-12 h-12 font-bold text-center align-middle bg-cyan-400 text-black/90 z-[100]">
				<span className="sm:hidden">xs</span>
				<span className="hidden sm:inline md:hidden">sm</span>
				<span className="hidden md:inline lg:hidden">md</span>
				<span className="hidden lg:inline xl:hidden">lg</span>
				<span className="hidden xl:inline 2xl:hidden">xl</span>
				<span className="hidden 2xl:inline 3xl:hidden">2xl</span>
				<span className="hidden 3xl:inline 4xl:hidden">3xl</span>
				<span className="hidden 4xl:inline 5xl:hidden">4xl</span>
				<span className="hidden 5xl:inline 6xl:hidden">5xl</span>
				<span className="hidden 6xl:inline 7xl:hidden">6xl</span>
				<span className="hidden 7xl:inline 8xl:hidden">7xl</span>
			</div>
		);
	} else return <></>;
}
