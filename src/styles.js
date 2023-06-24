const styles = {
	navButtonStyle:
		"text-sc-off-white bg-sc-red hover:bg-sc-red-dark hover:text-sc-gold text-center py-4 rounded font-Cinzel font-bold cursor-pointer",
	navLinkStyle:
		"text-sc-off-white hover:text-sc-gold cursor-pointer text-xl font-Cinzel font-medium",
	fullWidthComponentStyle: "w-full mx-auto",
	standardWidthComponentStyle: "container max-w-7xl mx-auto",
	defaultStyle: {
		transition: "opacity 500ms ease-in-out",
		opacity: 0,
	},
	transitionStyles: {
		entering: { opacity: 1 },
		entered: { opacity: 1 },
		exiting: { opacity: 0 },
		exited: { opacity: 0 },
	},
};

export default styles;
