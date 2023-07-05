const styles = {
	navButtonStyle:
		"text-sc-off-white bg-sc-red hover:bg-sc-red-dark hover:text-sc-gold text-center py-4 rounded font-Cinzel font-bold cursor-pointer",
	navLinkStyle:
		"text-sc-off-white hover:text-sc-gold cursor-pointer lg:text-xl font-Cinzel font-medium lg:w-auto w-full h-full lg:w-auto lg:h-auto text-4xl py-6 lg:py-0 my-2 cursor-pointer",
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
