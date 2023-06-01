/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Cinzel: ["Cinzel", "serif"],
				Catamaran: ["Catamaran", "sans-serif"],
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				"sc-off-white": "#f5f2ed",
				"sc-dark": "#3e3636",
				"sc-gold": "#f5d093",
				"sc-dark-50": "rgba(62,54,54,.5)",
				"sc-dark-blue": "#1a1b3d",
				"sc-red": "#d72323",
				"sc-off-white-50": "rgba(245,242,237,.5)",
				"sc-dark-black": "#0C0C1C",
				"sc-red-dark": "#9A1C20",
			},
		},
	},
	plugins: [],
};
