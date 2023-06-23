export default function IconShadow({className}) {
	return (
		<svg
			className={className}
			width="100%"
			height="100%"
			viewBox="0 0 80 80"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			style={{
				fillRule: "evenodd",
				clipRule: "evenodd",
				strokeLinejoin: "round",
				strokeMiterlimit: "2",
			}}
		>
			<g fill="currentColor">
				<rect
					x="0"
					y="0"
					width="80"
					height="80"
					style={{ fill: "none" }}
				/>
				<g>
					<path
						d="M41.402,51.082C39.674,53.055 37.141,54.308 34.312,54.308C29.103,54.308 24.881,50.085 24.881,44.877C24.881,41.915 26.25,39.272 28.388,37.543C24.502,29.511 24.354,20.125 27.972,12C24.676,13.467 21.584,15.546 18.878,18.254C7.041,30.091 7.041,49.284 18.878,61.122C30.716,72.959 49.908,72.959 61.746,61.122C64.451,58.415 66.531,55.325 68,52.027C59.515,55.805 49.656,55.485 41.402,51.082"
						style={{ fillRule: "nonzero" }}
					/>
					<path
						d="M41.775,51C43.159,49.305 44,47.108 44,44.702C44,39.343 39.851,35 34.732,35C32.566,35 30.578,35.785 29,37.088C30.421,40.138 32.32,43.002 34.742,45.536C36.872,47.769 39.251,49.578 41.775,51"
						style={{ fillRule: "nonzero" }}
					/>
				</g>
			</g>
		</svg>
	);
}
