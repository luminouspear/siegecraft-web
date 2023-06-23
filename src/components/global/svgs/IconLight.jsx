export default function IconLight({className}) {
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
						d="M55,28.102L50.569,43.035L54.898,58L39.963,53.569L25,57.896L29.431,42.963L25.102,28L40.037,32.429L55,28.102Z"
						style={{ fillRule: "nonzero" }}
					/>
					<path
						d="M40.001,9L47.737,34.265L73,42.001L47.737,49.737L40.001,75L32.265,49.737L7,42.001L32.265,34.265L40.001,9Z"
						style={{ fillRule: "nonzero" }}
					/>
				</g>
			</g>
		</svg>
	);
}
